import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
    instructions: {
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: '24px',
        marginTop: '100px',
    },
});

const Task2 = ({ history }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.instructions}>
                <div >
                    In the next video, we present you the video that may or may not contain misinformation. We expect you to
                    evaluate the information and choose to flag or not flag the video. After you submit your evaluation we give
                    you another chance to revert your action of flagging or not flagging the video. Press proceed to move to the video.
                    <Box textAlign="center" p={2}>
                        <img
                        src={process.env.PUBLIC_URL + "./images/taskImage2.png"}
                        width="40%"
                        height="40%"
                        />
                    </Box>
                </div>

            </div>
        </>
    );
};

export default withRouter(Task2);