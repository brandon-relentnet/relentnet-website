/* ./src/components/ThemeProvider.jsx */
import { useEffect } from 'react';
import useStore from '../store';

const ThemeProvider = ({ children }) => {
    const theme = useStore((state) => state.theme);

    useEffect(() => {
        const themes = ['latte', 'frappe', 'macchiato', 'mocha'];

        // Remove existing theme classes
        document.body.classList.remove(...themes);

        // Add the current theme class
        if (theme) {
            document.body.classList.add(theme);
        }
    }, [theme]);

    return <>{children}</>;
};

export default ThemeProvider;
