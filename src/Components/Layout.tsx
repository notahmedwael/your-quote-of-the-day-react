import { useState } from "react";
import { motion } from "framer-motion";
import quotesData from '../quotes.json'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// Define interfaces
interface Quote {
text: string;
author: string;
}

interface QuoteCollection {
Normal: Quote[];
Historical: Quote[];
Inspirational: Quote[];
}

function Layout () {
const [genre, setGenre] = useState<keyof QuoteCollection>('Inspirational');
return (
    <motion.div
    className="flex flex-col min-h-screen bg-primary text-primary-foreground"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    >
    <div className="flex flex-col min-h-screen bg-primary text-primary-foreground">
        <Header genre={genre} setGenre={setGenre} />
        <Main genre={genre} quotesData={quotesData as QuoteCollection} />
        <Footer />
    </div>
    </motion.div>
);
}

export default Layout;