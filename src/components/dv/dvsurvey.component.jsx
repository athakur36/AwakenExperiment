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

const DVQRadio = ({ questData }) => {
  console.log(questData);
  const { question, responses } = questData;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(1);

  const handleChange = (value) => {
    console.log(value);
    setSelectedValue(value);
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
          value={selectedValue}
        >
          <FormControlLabel
            value={responses[0].val}
            control={<Radio color='primary' />}
            onChange={handleChange}
            label={responses[0].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[1].val}
            control={<Radio color='primary' />}
            label={responses[1].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[2].val}
            control={<Radio color='primary' />}
            label={responses[2].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[3].val}
            control={<Radio color='primary' />}
            label={responses[3].text}
            labelPlacement='top'
          />
          <FormControlLabel
            value={responses[4].val}
            control={<Radio color='primary' />}
            label={responses[4].text}
            labelPlacement='top'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default DVQRadio;
