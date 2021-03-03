import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
        textAlign: 'left',
        margin: '0px',
        width: '40%',
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

const ButtonBox = (props) => {
    const classes = useStyles();
    const source = props.photo;
    const text = props.text;
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };

    return (
        <div className={classes.group}>
            <img className={classes.img} src={source} />
            <h4 className={classes.heading}>{text}</h4>
            <RadioGroup row aria-label="YesNo" name="YesNo" value={value} onChange={handleChange}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </div>
    );
}

export default ButtonBox;