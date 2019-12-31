import { createContext } from 'react';

const ThemeContext = createContext<[string, (theme: string) => void]>(["cyan", () => { }]);

export default ThemeContext;