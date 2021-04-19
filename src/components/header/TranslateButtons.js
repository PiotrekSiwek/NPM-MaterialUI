import React from "react";
import {Button, ButtonGroup, Box} from "@material-ui/core";

const TranslateButtons = () => {
    return (
        <>
            <Box component="div" p={5} textAlign="right">
                <ButtonGroup aria-label="button group">
                    <Button color="primary" size="medium" variant="contained">ENG</Button>
                    <Button color="secondary" size="medium" variant="contained">PL</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export default TranslateButtons