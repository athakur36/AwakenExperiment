import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const QNRadio = ({ question }) => {
  const { text, scale } = question;
  const classes = useStyles();

  return (
    <div className={classes.qnaRoot}>
      <div className={classes.question}>{text}</div>
      <FormControl component='fieldset' className={classes.radioGroupWrapper}>
        <RadioGroup
          row
          aria-label='position'
          name='position'
          defaultValue='top'
          className={classes.radioGroup}
        >
          <FormControlLabel
            value='top'
            control={<Radio color='primary' />}
            label='Strongly agree'
            labelPlacement='top'
          />
          <FormControlLabel
            value='start'
            control={<Radio color='primary' />}
            label='Agree'
            labelPlacement='top'
          />
          <FormControlLabel
            value='bottom'
            control={<Radio color='primary' />}
            label='Nuetral'
            labelPlacement='top'
          />
          <FormControlLabel
            value='end'
            control={<Radio color='primary' />}
            label='Disagree'
            labelPlacement='top'
          />
          <FormControlLabel
            value='end'
            control={<Radio color='primary' />}
            label='Strongly Disagree'
            labelPlacement='top'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default QNRadio;
