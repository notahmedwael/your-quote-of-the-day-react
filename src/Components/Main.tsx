import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interfaces
interface Quote {
text: string;
author: string;
}

interface QuoteCollection {
Normal: Quote[];
Historical: Quote[];
Inspirational: Quote[];
}

interface MainProps {
genre: keyof QuoteCollection;
quotesData: QuoteCollection;
}

// Quote picker
const getRandomQuote = (
quotes: QuoteCollection,
genre: keyof QuoteCollection
): Quote => {
const quoteArray = quotes[genre];
if (!quoteArray || quoteArray.length === 0) {
    return { text: 'No quotes available', author: 'Unknown' };
}
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
return quoteArray[randomIndex];
};

// Motion variants
const container = {
    hidden: { opacity: 0 },
    show: {
    opacity: 1,
    transition: {
    staggerChildren: 0.03,
    },
},
};

const word = {
hidden: { opacity: 0, y: 10 },
show: { opacity: 1, y: 0 },
};

const fadeVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1 },
exit: { opacity: 0 },
};

function Main({ genre, quotesData }: MainProps) {
const [quote, setQuote] = useState<Quote | null>(null);
const [nextQuote, setNextQuote] = useState<Quote | null>(null);
const [key, setKey] = useState(0);

const revealQuote = () => {
    const newQuote = getRandomQuote(quotesData, genre);

    if (!quote) {
    setQuote(newQuote);
    setKey((prev) => prev + 1);
    } else {
      setNextQuote(newQuote); // queue up the next quote
      setQuote(null); // triggers AnimatePresence exit
    }
};

const handleExitComplete = () => {
    if (nextQuote) {
    setQuote(nextQuote);
    setNextQuote(null);
    setKey((prev) => prev + 1);
    }
};

return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      {/* Only show prompt text when no quote is visible and not during transition */}
        {!quote && !nextQuote && (
        <>
            <p className="text-3xl text-primary-foreground">
            Stay inspired with a new quote every day!
            </p>
            <p
            className="mt-5 text-xl hover:underline cursor-pointer"
            onClick={revealQuote}
            >
            Reveal today's quote
            </p>
        </>
    )}

        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {quote && (
            <motion.div
            key={key}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="mt-5"
            >
            <motion.p
            className="text-xl italic flex flex-wrap justify-center gap-x-1"
            variants={container}
            initial="hidden"
            animate="show"
            >
            {quote.text.split(' ').map((wordText, index) => (
                <motion.span
                key={index}
                variants={word}
                className="inline-block"
                >
                {wordText}
                </motion.span>
            ))}
            </motion.p>

            <p className="text-lg mt-2">— {quote.author}</p>

            <p
            className="text-sm hover:underline mt-5 cursor-pointer"
            onClick={revealQuote}
            >
            Another Quote?
            </p>
        </motion.div>
        )}
    </AnimatePresence>
    </main>
);
}

export default Main;
