import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [URL, SetURL] = useState(null);
    return (
        <AppContext.Provider value={{ data, setData, URL, SetURL }}>
            {children}
        </AppContext.Provider>
    );
}
