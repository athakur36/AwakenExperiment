import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Card, CardContent } from "@material-ui/core";
import * as Colors from "../constants/colors";
import firebase from "../firebase/firebase.utils";
//look for library which provides a bar chart component in react
const useStyles = makeStyles({
  card: {
    minWidth: 500,
    minHeight: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    minWidth: 500,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  login: {
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: "20px",
    fontWeight: "600",
  },
});

const Login = ({ history, match }) => {
  const classes = useStyles();
  const [username, setUserName] = React.useState("");
  const [showUserLoginError, setShowUserLoginError] = React.useState(false);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserErrorCheck = () => {
    setShowUserLoginError(true);
  };

  const createNewUser = () => {
    var userId = (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);

    var timeNow = Date().toLocaleString();

    const dbRef = firebase.database().ref("users/" + userId);
    dbRef.child("username").set(username);
    dbRef.child("already_submitted").set(false);
    dbRef.child("date_created").set(timeNow);

    localStorage.setItem("userID", JSON.stringify(userId));
  };
  const onLoginClicked = () => {
    //checkUserValidity();
    localStorage.clear();
    if (username === "") {
      setShowUserLoginError(true);
    } else {
      createNewUser();
      history.push(`/task`);
    }
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.loginTitle}>Login to Awaken Experiment</div>
          {/* TODO:Add validations to this text input */}
          <TextField
            fullWidth
            required
            label="Enter the username you got from qualtrics here"
            margin="normal"
            type="text"
            variant="outlined"
            onChange={handleUserNameChange}
            value={username}
          />
          {showUserLoginError && (
            <div className={classes.error}>Invalid User ID</div>
          )}
          <Button
            className={classes.login}
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={onLoginClicked}
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default withRouter(Login);
