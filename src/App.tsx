import { useState } from 'react';
import { data, IItem } from './data';
import './styles.css';
import React, { useContext } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = React.createContext<Theme>('light');
export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <ThemeContext.Provider value={currentTheme}>
                <List data={data} />
            </ThemeContext.Provider>
        </div>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {props.data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const theme = useContext(ThemeContext);
    const className = `listItem listItem_${theme}`;
    return <div className={className}>{props.caption}</div>;
}
