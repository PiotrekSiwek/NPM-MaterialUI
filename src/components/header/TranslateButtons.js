import React from "react";
import {Button, ButtonGroup, Box} from "@material-ui/core";
import i18n from "i18next";

const changeLanguages = (ln) => {
    return () => {
        i18n.changeLanguage(ln)
    }
}

const TranslateButtons = () => {
    return (
        <>
            <Box component="div" p={5} textAlign="right">
                <ButtonGroup aria-label="button group">
                    <Button color="primary"
                            size="medium"
                            variant="contained"
                            onClick={changeLanguages("en")}>
                        ENG
                    </Button>
                    <Button color="secondary"
                            size="medium"
                            variant="contained"
                            onClick={changeLanguages("pl")}>
                        PL
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export default TranslateButtons