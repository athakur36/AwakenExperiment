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

const ConfirmationBias = {};
const PopularityBias = {};
const NegativityBias = {};
const CognitiveDissonanceTreatment = {};
const CognitiveDissonanceControl = {};
// const dvData = {};
// for (i in dvIDSs) {
//   dvData[id] = 3
// }

// localStorage.setItem('dvData', dvData);
// const dv2Data = {};
// const dv3Data = {};

const DVRadio = ({ questData, enableSubmitButton }) => {
  const { question, responses, id } = questData;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(0);
  // var [radiCheckCounter, setRadiCheckCounter] = React.useState(0);

  const saveAnswer = (answer, id) => {
    // dvData[id] = answer;
    // localStorage.setItem('dvData', JSON.stringify(dvData));

    if (id.startsWith('cb-')) {
      ConfirmationBias[id] = answer;
      localStorage.setItem('dvData', JSON.stringify(ConfirmationBias));
    } else if (id.startsWith('pb-')) {
      PopularityBias[id] = answer;
      localStorage.setItem('dvData', JSON.stringify(PopularityBias));
    } else if (id.startsWith('nb-')) {
      NegativityBias[id] = answer;
      localStorage.setItem('dvData', JSON.stringify(NegativityBias));
    } else if (id.startsWith('cdt-')) {
      CognitiveDissonanceTreatment[id] = answer;
      localStorage.setItem(
        'dvData',
        JSON.stringify(CognitiveDissonanceTreatment)
      );
    } else if (id.startsWith('cdc-')) {
      CognitiveDissonanceControl[id] = answer;
      localStorage.setItem(
        'dvData',
        JSON.stringify(CognitiveDissonanceControl)
      );
    }
  };

  const handleChange = (event) => {
    setSelectedValue(Number(event.target.value));
    saveAnswer(event.target.value, id); //dvIDs[question]);
    enableSubmitButton();
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
          {responses.map((resp) => {
            return (
              <FormControlLabel
                value={resp.value}
                control={<Radio color='primary' />}
                label={resp.text}
                labelPlacement='top'
                // onChange={handleChange}
              />
            );
          })}

          {/* <FormControlLabel
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
          /> */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default DVRadio;
