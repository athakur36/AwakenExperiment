export const DV_Survey = [
  // Confirmation Bias [0]
  {
    surveyData: {
      questions: [
        {
          question:
            'Emotional valence: feeling of positive or negative emotion (1-negative and 5-Positive)',
          responses: [
            { value: 1, text: 'Very Negative' },
            { value: 2, text: 'Negative' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Positive' },
            { value: 5, text: 'Very Positive' },
          ],
          id: 'cb-emotion',
        },
        {
          question:
            'Arousal: How aroused you feel after watching the video (1-Low, 5-high)',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'cb-excitement',
        },
        {
          question:
            'How much do you agree with the information presented in the video?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'cb-agreement',
        },
        {
          question:
            'How trustworthy is the information presented in the video?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'cb-trustworthiness',
        },
        {
          question: 'How credible is the information presented in the video?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'cb-credibility',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
  // Popularity Bias [1]
  {
    surveyData: {
      questions: [
        {
          question: 'How much you liked the song?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'pb-rating',
        },
        {
          question: 'How likely are you to share/recommend the song?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'pb-sharerec',
        },
        {
          question: 'How likely are you going to watch the song again?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'pb-rewatch',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
  // Negativity Bias [2]
  {
    surveyData: {
      questions: [
        {
          question:
            'How excited do you get when you watch sport videos like this one?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'nb-excitedrating',
        },
        {
          question: 'How do you rate John Carney’s performance in this game?',
          responses: [
            { value: 1, text: 'Excellent' },
            { value: 2, text: 'Good' },
            { value: 3, text: 'Average' },
            { value: 4, text: 'Fair' },
            { value: 5, text: 'Poor' },
          ],
          id: 'nb-performancerating',
        },
        {
          question: 'How much you liked the video?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'nb-rating',
        },
        {
          question: 'How likely are you to share/recommend the video?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'nb-sharerec',
        },
        {
          question: 'How likely are you going to watch the video again?',
          responses: [
            { value: 1, text: 'Not at all' },
            { value: 2, text: 'Not really' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Somewhat' },
            { value: 5, text: 'Very much' },
          ],
          id: 'nb-rewatch',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
  // Cognitive Dissonance treatment message [3]
  {
    surveyData: {
      questions: [
        {
          question:
            'The fact-checking algorithm suggests that you were wrong in your judgment of classifying the video. Do you want to revert the classification?',
          responses: [
            { value: 1, text: 'Yes' },
            { value: 2, text: 'No' },
          ],
          id: 'cdt-revert',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
  // Cognitive Dissonance control message [4]
  {
    surveyData: {
      questions: [
        {
          question:
            'We give you another chance to think about your action of classifying the video. Do you want to revert your classification?',
          responses: [
            { value: 1, text: 'Yes' },
            { value: 2, text: 'No' },
          ],
          id: 'cdc-revert',
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
];
