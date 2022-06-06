import { ReactElement } from 'react';
import React, { useContext } from 'react';

type Theme = 'light' | 'dark';
let ThemeContext = React.createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            <div>{useTheme()}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);
    return theme;
}
