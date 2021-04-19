import React from "react";
import TranslateButtons from "./TranslateButtons";
import {useTranslation} from "react-i18next";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Icon} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchInput from "./SearchInput";


const useStyle = makeStyles({
    header: {
        textAlign: "center",
        padding: "10px"
    },
    icon:{
        fontSize: "6rem",
        marginLeft: "10%",
        width:"80%"
    }
})

const MaterialHeader = () => {

    const classes = useStyle();
    const {t} = useTranslation();

    return (
        <>
            <Box bgcolor="black">
                <TranslateButtons/>
                <Icon color={"secondary"} component={"span"} className={classes.icon}>
                <i className="fab fa-npm"/>
                </Icon>
                <Typography variant="h1" color="primary" className={classes.header}>
                    {t("title")}
                </Typography>
                <Typography variant="h3" color="secondary" className={classes.header}>
                    {t("description")}
                </Typography>
                <Box textAlign="center">
                    <Icon draggable={true}>
                        <ArrowDownwardIcon color="secondary" />
                    </Icon>
                </Box>
                <SearchInput/>
            </Box>
        </>
    )
}

export default MaterialHeader;