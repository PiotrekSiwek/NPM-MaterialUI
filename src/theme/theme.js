import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            root: {
                backgroundColor: "red",
                border: "2px solid blue",
                outline: "none"
            },
            focused: {
                borderBottom: "2px solid yellow",
            }
        }
    },
    palette: {
        primary: {
            main: "#69a8c5",
        },
        secondary: {
            main: "#c48223"
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 667,
            lg: 1024,
            xl: 1280,
        }
    },
    typography: {
        h1: {
            fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
            fontWeight: 600,
            fontSize: "2rem",
            '@media (min-width:1200px)': {
                fontSize: '3rem'
            }
        },
        h3: {
            fontFamily: ['Source Sans Pro','sans-serif'].join(','),
            fontWeight: 700,
            fontSize: "1.5rem"
        },
        button:{
            fontFamily: ['Source Sans Pro','sans-serif'].join(','),
            fontWeight: 600,
            fontSize: "0.9rem"
        }
    }
});

export default theme;