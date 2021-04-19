import React, {useState, useEffect, useContext} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Progress from "./Progress";
import CardResult from "./Cards";
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(4),
        },
    },
}));

const SearchResult = () => {
    const classes = useStyles();

    const {npmName} = useContext(SearchedPackageContext);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false);
    const [dimmer, setDimmer] = useState(false);

    const getNpm = async () => {
        try {
            const data = await fetch(`https://registry.npmjs.org/-/v1/search?text=${npmName}`);
            const res = await data.json();
            setResults([...res.objects]);
            setDimmer(false);
        } catch (e) {
            setError(true);
        }
    }

    useEffect(() => {
        setDimmer(true)
        getNpm()
    }, [npmName])


    return (
        <>
            {dimmer &&
            <div className={classes.root} style={{marginTop: "30px"}}>
                <Progress/>
            </div>
            }
            {error ? <Typography variant="h5" component="h2">Błąd pobierania danych</Typography> :
                <Grid direction={"column"}>
                    <Grid item container>
                        <Grid xs={0} sm={2}/>
                        <Grid xs={12} sm={8}>
                            <CardResult results={results}/>
                        </Grid>
                        <Grid xs={0} sm={2}/>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default SearchResult;