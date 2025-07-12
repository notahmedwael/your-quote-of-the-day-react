import {
Select,
SelectGroup,
SelectLabel,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from './ui/select';
import ToggleTheme from './ThemeToggle';

interface Quote {
text: string;
author: string;
}

// Define QuoteCollection for keyof
interface QuoteCollection {
Normal: Quote[];
Historical: Quote[];
Inspirational: Quote[];
}

// Define props interface
interface HeaderProps {
genre: keyof QuoteCollection;
setGenre: (genre: keyof QuoteCollection) => void;
}

function Header({ genre, setGenre }: HeaderProps) {
return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <a href="">
            <h1 className="text-3xl sm:text-4xl font-mea-culpa font-bold text-center md:text-left">
            Your Quote of the Day
            </h1>
        </a>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose a tone" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>Tones</SelectLabel>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Inspirational">Inspirational</SelectItem>
                <SelectItem value="Historical">Historical</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>

        <ToggleTheme />
    </div>
    </header>
);
}


export default Header;