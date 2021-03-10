export const IV_Surveys = [
  {
    surveyData: {
      intro: `Please select the option which appears closest to your answer`,
      questions: [
        {
          text: 'Covid-19 vaccination is safe to take.',
          type: 'RADIO_MATRIX',
          id: '4-4',
        },
        {
          text: 'I am willing to take the Covid-19 vaccines.',
          type: 'RADIO_MATRIX',
          id: '4-2',
        },
        {
          text:
            'I would recommend my family and friends to get Covid-19 vaccine.',
          type: 'RADIO_MATRIX',
          id: '4-1',
        },
      ],
    },
    surveyType: 'LIKERT_MATRIX_SURVEY',
    step: 4,
  },
];
