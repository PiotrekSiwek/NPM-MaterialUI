import React from "react";
import Main from "./components/main/Main";
import MaterialHeader from "./components/header/MaterialHeader";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme/theme";
import {HashRouter} from "react-router-dom";
import SearchedPackageProvider from "./contexts/SearchedPackageContext";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <SearchedPackageProvider>
                <HashRouter>
                    <MaterialHeader/>
                    <Main/>
                </HashRouter>
            </SearchedPackageProvider>
        </ThemeProvider>
    );
}

export default App;
