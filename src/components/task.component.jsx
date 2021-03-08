import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent } from "@material-ui/core";
import * as Colors from "../constants/colors";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

//<img src={process.env.PUBLIC_URL + './images/emoticons.png'} width = "350px" height = "75px" />

const useStyles = makeStyles({
  instructions: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "24px",
    marginTop: "100px",
  },
});

const Task = ({ history }) => {
  const classes = useStyles();

  const onLoginClicked = () => {
    var userId = localStorage.getItem("userID");
    history.push(`/survey/${userId}`);
  };

  return (
    <>
      <div className={classes.instructions}>
        <div>
          <Box p={2}>
            Thank you for agreeing to participate in this study. This study
            examines your media behaviors in two parts. In the first part, you
            are required to answer a few questions; afterwards, you will proceed
            to the second part. In the second part, we will present you with
            three videos. You are required to watch the video and then answer a
            few questions regarding the video you just watched. Please answer
            the questions to the best of your abilities and do not skip any
            questions. You can like, dislike or choose to share or/and comment
            on the video using the interactive buttons provided below the
            player. In addition, you can also flag the video only if you think
            the video contains some misinformation.
          </Box>
          <Box textAlign="center">
            <img
              src={process.env.PUBLIC_URL + "./images/taskImage1.png"}
              width="40%"
              height="40%"
            />
          </Box>
        </div>
      </div>
      <Box textAlign="right">
        <Link to="/survey">
          <Button variant="contained" color="primary" onClick={onLoginClicked}>
            PROCEED
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default withRouter(Task);
