import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Separator } from './ui/separator';
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from './ui/accordion';

function Footer() {
return (
    <div className='h-max'>
    <Separator className='bg-accent opacity-50' />
    <footer className="p-4 mt-10">
        <Accordion type="single" collapsible>
            <AccordionItem value="website-info">
                <AccordionTrigger>What’s the Purpose of This Website?</AccordionTrigger>
                <AccordionContent>
                    To spark a ripple of positivity across the globe — one uplifting word at a time ✨
                    </AccordionContent>
            </AccordionItem>
            <AccordionItem value="why-this-website">
                <AccordionTrigger>Why Was This Website Created?</AccordionTrigger>
                <AccordionContent>
                    Because words carry power. A single phrase can break someone — or build them up. This platform exists to remind us that kindness is a choice — and a catalyst for change.
                    </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-to-use">
                <AccordionTrigger>How To Use This Website?</AccordionTrigger>
                <AccordionContent>
                    Just pick a tone to the quote you want and click reveal tone! Want another quote from the same tone or a different tone? Just use the tone you want and click Another Quote.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact-dev">
                <AccordionTrigger>Contact The Dev</AccordionTrigger>
                <AccordionContent>
                    <div className='flex flex-row justify-around items-center'>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <FaSquareXTwitter />
                            <p className="hover:underline">
                                <a href="https://x.com/notahmedwael"
                                target="_blank"
                                rel="noopener">
                                    Twitter (X)
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <FaDiscord />
                            <p className="hover:underline">
                                <a href="https://discord.com/users/605552517404688384"
                                target="_blank"
                                rel="noopener">
                                    Discord
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <FaLinkedin />
                            <p className="hover:underline">
                                <a href="https://www.linkedin.com/in/ahmed-wael-9a6389284/"
                                target="_blank"
                                rel="noopener">
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>


        <div className="mt-30 flex flex-col items-center justify-center gap-4 text-sm">
            <p>Made with ❤️ by Ahmed Wael</p>
            <div className='flex flex-row items-center gap-2'>
                <FaGithub />
                <p className="hover:underline">
                    <a rel='noopener' title='Github Link' href="https://github.com/notahmedwael" target='_blank'>Github</a>
                </p>
            </div>
        </div>
    </footer>
    </div>
)
}

export default Footer