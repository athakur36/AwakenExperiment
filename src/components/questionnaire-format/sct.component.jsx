import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import QNA from "../question-type/qna.component";
import GreenRadio from "../question-type/radio.component";

const useStyles = makeStyles({
  root: {},
  intro: {
    marginBottom: "50px",
  },
  submit: {
    marginTop: "50px",
    marginBottom: "150px",
  },
});

const renderSwitch = (question) => {
  switch (question.type) {
    case "SCT":
      return <QNA label={question.text} />;
    case "radio":
      return <GreenRadio label={question.text} />;
    default:
      return <div>Survey Type is Invalid</div>;
  }
};

const Sct = ({ questData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <h3>Please answer the following:</h3>
      <form>
        {questData.questions.map((question, index) => (
          <>{renderSwitch(question)} </>
        ))}
      </form>
    </div>
  );
};

export default Sct;
