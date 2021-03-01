import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import { Link } from 'react-router-dom';


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

const Task = ({ history }) => {
    const classes = useStyles();

    const onLoginClicked = () => {
        var userId = localStorage.getItem('userID')
        history.push(`/survey/${userId}`);
    };

    return (
        <>
            <div className={classes.instructions}>
                <div >
                    Thank you for agreeing to participate in this study. This study examines your media behaviors in two parts. In the first part,
                    you are required to answer a few questions; afterwards, you will proceed to the second part. In the second part, we will present you with three videos.
                    You required to watch the video and then answer a few questions regarding the video you just watched. Please answer the questions to the best
                    of your abilities and do not skip any questions. You can like, dislike or choose to share or/and comment on the video using the interactive
                    buttons provided below the player. In addition, you can also flag the video only if you think the video contains some misinformation.
                </div>

                <div >
                    Lastly, to end the experiment, we will present you a final video that may or may not contain misinformation. We expect you to evaluate the information
                    and choose to flag or not flag the video. After you submit your evaluation we give you another chance to revert your action
                    of flagging or not flagging the video. Press proceed to start the study.
                </div>

            </div>

            <Link to='/survey'>
                <Button variant='contained' color='primary' onClick={onLoginClicked}>
                    PROCEED
              </Button>
            </Link>
        </>
    );
};

export default withRouter(Task);