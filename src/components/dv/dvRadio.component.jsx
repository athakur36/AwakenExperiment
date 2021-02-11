import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  qnaRoot: {
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: '30px',
  },
  radioGroupWrapper: {
    width: '100%',
  },
  radioGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const dv1Data = {};
// const dv2Data = {};
// const dv3Data = {};

const DVRadio = ({ questData }) => {
  const { question, responses } = questData;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(3);

  const saveAnswer = (answer, question) => {
    // Test printing to see output on console. Can delete.
    //console.log(answer);
    //console.log('id is: ' + id);

    // Make key-value pairs in dictionary, id is question.id from IV-Surveys-Data.js.
    // answer is event value.
    // store into localStorage in the corrosponding survey object
    console.log(answer)
    dv1Data[question] = answer;
    //   localStorage.setItem('Survey3', JSON.stringify(survey3Data));
    localStorage.setItem('dv1Data', JSON.stringify(dv1Data));
    // if (id.startsWith('2')) {
    //   survey2Data[id] = answer;
    //   localStorage.setItem('Survey2', JSON.stringify(survey2Data));
    // } else if (id.startsWith('3-')) {
    //   survey3Data[id] = answer;
    //   localStorage.setItem('Survey3', JSON.stringify(survey3Data));
    // } else if (id.startsWith('4-')) {
    //   survey4Data[id] = answer;
    //   localStorage.setItem('Survey4', JSON.stringify(survey4Data));
    // }
  };

  const handleChange = (event) => {
    setSelectedValue(Number(event.target.value));
    saveAnswer(event.target.value, question);
  };

  return (
    <div className={classes.qnaRoot}>
      <div className={classes.question}>{question}</div>
      <FormControl component='fieldset' className={classes.radioGroupWrapper}>
        <RadioGroup
          row
          aria-label='position'
          name='position'
          className={classes.radioGroup}
          onChange={handleChange}
          value={selectedValue}
        >
          <FormControlLabel
            value={responses[0].value}
            control={<Radio color='primary' />}
            label={responses[0].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[1].value}
            control={<Radio color='primary' />}
            label={responses[1].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[2].value}
            control={<Radio color='primary' />}
            label={responses[2].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[3].value}
            control={<Radio color='primary' />}
            label={responses[3].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[4].value}
            control={<Radio color='primary' />}
            label={responses[4].text}
            labelPlacement='top'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default DVRadio;
