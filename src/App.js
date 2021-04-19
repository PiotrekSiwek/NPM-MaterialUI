import React from "react";
import MaterialHeader from "./components/header/MaterialHeader";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MaterialHeader/>
        </ThemeProvider>
    );
}

export default App;
