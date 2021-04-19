import React, {useState, useContext} from "react";
import {LibraryInput} from "../../styles/StyledComponents";
import {Box, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";
import {MessageWrapper} from "../../styles/StyledComponents";

const useStyle = makeStyles({
    button: {
        display: "block",
        margin: "0 auto"
    }
})

const SearchInput = () => {

    const {t} = useTranslation();
    const classes = useStyle();
    const history = useHistory();
    const {handleSearch} = useContext(SearchedPackageContext);
    const [name, setName] = useState("");
    const [message, setMessage] = useState(false);

    const handleClick = () =>{
        if(name.length<1){
            setMessage(true);
            return
        }
        handleSearch(name);
        setName("");
        history.push("/results");
        setMessage(false);
    }


    return (
        <Box textAlign="center" p={3}>
            <LibraryInput placeholder={t("placeholder")}
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
            {message &&
            <MessageWrapper>{t("message")}</MessageWrapper>
            }
            <Button color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={handleClick}>
                {t("search")}
            </Button>
        </Box>
    )
}

export default SearchInput;