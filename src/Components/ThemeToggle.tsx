import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
const [theme, setTheme] = useState(() => {
    // Check local storage first
    if (typeof window !== 'undefined' && localStorage.theme) {
    return localStorage.theme;
    }
    // Fallback to system preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
    }
    return 'light';
});

useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    }
}, [theme]);

const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
};

return (
    <button
    type='button'
    onClick={toggleTheme}
    className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
    {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
    ) : (
        <FiSun className="w-5 h-5" />
    )}
    </button>
);
}