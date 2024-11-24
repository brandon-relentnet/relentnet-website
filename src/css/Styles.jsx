/* ./src/css/Styles.jsx */
import React, { createContext, useContext } from 'react';

const styles = {
    input: '',
    sectionHeader: '',
    sectionBlocks: '',
    page: '',
    label: '',
    dropdown: '',
    button: ''
};

const StylesContext = createContext(styles);

export const StylesProvider = ({ children }) => (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
);

export const useStyles = () => useContext(StylesContext);