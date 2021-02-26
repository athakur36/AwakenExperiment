import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    group: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    ratingBox: {
        margin: 'center',
        paddingBottom: '30px',
    },
    heading: {
        textAlign: 'center',
        margin: '0px',
        paddingTop: '20px',
    },
    img: {
        width: '100%',
        alignSelf: 'center',
        paddingTop: '30px',
    },
    row: {
        display: 'flex',
        paddingTop: '10px',
    },
    wording: {
        marginTop: '5px',
        padding: '0 10px',
    }
}));

const experimentData = {};

const RatingBox = (props) => {
    const classes = useStyles();
    const tagName = props.name;
    const source = props.photo;
    const [value, setSelectedValue] = React.useState(0);

    // const saveAnswer = (answer, question) => {
    //     experimentData[question] = answer;
    //     localStorage.setItem('experimentData', JSON.stringify(experimentData));
    // };

    const handleChange = (event) => {
        //where to store rating view in database
        console.log("rating: ", event.target.value);
        setSelectedValue((event.target.value));
        //saveAnswer(event.target.value, id);//dvIDs[question]);
        experimentData[source] = event.target.value
        localStorage.setItem('experimentData', JSON.stringify(experimentData));
    };

    return (
        <div className={classes.group}>
            <img className={classes.img} src={source} />
            <h3 className={classes.heading}>The Price of the Product is High</h3>
            <div className={classes.row}>
                <h5 className={classes.wording}>Strongly Disagree</h5>
                <Rating
                    defaultValue={0}
                    name={tagName}
                    key={tagName}
                    className={classes.ratingBox}
                    onChange={handleChange} />
                <h5 className={classes.wording}>Strongly Agree</h5>
            </div>
        </div>
    );
}

export default RatingBox;