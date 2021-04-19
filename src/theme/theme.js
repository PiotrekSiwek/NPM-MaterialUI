import {createMuiTheme} from '@material-ui/core/styles';
// import {blue, yellow} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#69a8c5",
        },
        secondary: {
            main:"#c48223"
        },
    },
    breakpoints:{
        values:{
            xs:0,
            sm:375,
            md:667,
            lg:1024,
            xl:1280,
            xxl:1440
        }
    },
    typography:{
        h1:{
            fontFamily:"IBM Plex Sans, sans-serif",
            fontWeight:600,
            fontSize:"3rem"
        },
        h3:{
            fontFamily:"IBM Plex Sans, sans-serif",
            fontWeight:600,
            fontSize:"1.5rem"
        },
        fontFamily:"Source Sans Pro, sans-serif",
        fontWeight:400
    }
});

export default theme;