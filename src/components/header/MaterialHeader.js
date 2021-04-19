import React from "react";
import TranslateButtons from "./TranslateButtons";
import {Box, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Icon} from '@material-ui/core';
import Image from 'material-ui-image';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { LibraryInput } from "../../styles/StyledComponents";
import NpmImage from "../../assets/131029139785_0.png";

const useStyle = makeStyles({
    header: {
        textAlign: "center",
        padding: "10px"
    },
    button: {
        display: "block",
        margin: "0 auto"
    },
    icon:{
        fontSize: "5rem",
        padding:"10px",
        marginLeft: "10%"
    }
})

const MaterialHeader = () => {

    const classes = useStyle();

    return (
        <>
            <Box bgcolor="black">
                <TranslateButtons/>
                <Icon color={"secondary"} component={"span"} className={classes.icon}>
                <i className="fab fa-npm"/>
                </Icon>
                <Typography variant="h1" color="primary" className={classes.header}>
                    Best NPM package finder on the WEB
                </Typography>
                <Typography variant="h3" color="secondary" className={classes.header}>
                    Best NPM package finder on the WEB
                </Typography>
                <Box textAlign="center">
                    <Icon draggable={true}>
                        <ArrowDownwardIcon color="secondary" />
                    </Icon>
                </Box>
                <Box textAlign="center" p={3}>
                    <LibraryInput placeholder="wpisz nazwę biblioteki"/>
                    <Button color="primary" variant="contained" className={classes.button}>
                        Szukaj
                    </Button>
                </Box>
            </Box>
            <Image src={NpmImage} aspectRatio={8/3}/>
        </>
    )
}

export default MaterialHeader;