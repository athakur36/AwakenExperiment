export const DV_Survey = [
  {
    surveyData: {
      intro: 'Please answer the following questions:',
      questions: [
        {
          text: 'Emotional valence (1-negative and 5-Positive)',
          type: 'RADIO',
        },
        { text: 'Arousal (1-Low, 5-high)', type: 'RADIO' },
        {
          text:
            'How much do you agree with the information presented in the video?',
          type: 'RADIO',
        },
        {
          text: 'How trustworthy is the information presented in the video?',
          type: 'RADIO',
        },
        {
          text: 'How credible is the information presented in the video?',
          type: 'RADIO',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
];
