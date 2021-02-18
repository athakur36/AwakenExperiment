import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    group: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ratingBox: {
        margin: "center",
        paddingBottom: "15px",
    },
    heading: {
        textAlign: "center",
        margin: "0px",
        paddingTop: "20px",
    },
    img : {
        width: "95%",
        alignSelf: "center",
      }
}));

const RatingBox = (props) => {
    const classes = useStyles();
    const tagName = props.name;
    const source = props.photo;

    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.group}>
            <img className={classes.img} src={source}/>
            <h3 className={classes.heading}>The Price of the Product is High</h3>
            <div>
                <Rating name={tagName} className={classes.ratingBox} value={value} onChange={(event, newValue) => {setValue(newValue); }}/>
            </div>
        </div>
    );
}

export default RatingBox;