import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


const CardResult = ({results}) => {
    return(

<Grid container spacing={2}>
    {results &&
    results.map((elm) => {
        return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {elm.package.name}
                            </Typography>
                            <Typography style={{height: "90px", fontSize: "14px"}}>
                                {elm.package.description}
                            </Typography>
                            <Typography>
                                version: {elm.package.version}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={elm.package.links.npm}>
                            NPM
                        </Button>
                        <Button size="small" color="primary" href={elm.package.links.homepage}>
                            Homepage
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })
    }
</Grid>

    )
}

export default CardResult;