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
          id: 'Emotion'
        },
        {
          question: 'How excited you you feel? (1-Low, 5-high)',
          responses: [
            { value: 1, text: 'Not Excited at all' },
            { value: 2, text: 'Little Excited' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Excited' },
            { value: 5, text: 'Very Excited' },
          ],
          id: 'Arousal'
        },
        {
          question:
            'How much do you agree with the information presented in the video?',
          responses: [
            { value: 1, text: 'Strongly agree' },
            { value: 2, text: 'Agree' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Little agree' },
            { value: 5, text: 'Not at all agree' },
          ],
          id: 'Agreement'
        },
        {
          question:
            'How trustworthy is the information presented in the video?',
          responses: [
            { value: 1, text: 'Very Trustworthy' },
            { value: 2, text: 'Trustworthy' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Little Trustworthy' },
            { value: 5, text: 'Not Trustworthy at all' },
          ],
          id: 'Trustworthiness'
        },
        {
          question: 'How credible is the information presented in the video?',
          responses: [
            { value: 1, text: 'Very Credible' },
            { value: 2, text: 'Credible' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'Little Credible' },
            { value: 5, text: 'Not credible at all' },
          ],
          id: 'Credibility'
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
            { value: 1, text: 'Very Much' },
            { value: 2, text: 'like it' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'a little' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Rating'
        },
        {
          question: 'How likely are you to share/recommend the song?',
          responses: [
            { value: 1, text: 'Very likely' },
            { value: 2, text: 'Likely' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'little likely' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Share/Recommend Likelihood'
        },
        {
          question: 'How likely are you going to watch the song again?',
          responses: [
            { value: 1, text: 'Very likely' },
            { value: 2, text: 'Likely' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'little likely' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Rewatch Likelihood'
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
          question: 'How do you rate John Carney’s performance in this game?',
          responses: [
            { value: 1, text: 'Excellent' },
            { value: 2, text: 'Good' },
            { value: 3, text: 'Average' },
            { value: 4, text: 'Fair' },
            { value: 5, text: 'Poor' },
          ],
          id: 'Performance Rating'
        },
        {
          question: 'How much you liked the video?',
          responses: [
            { value: 1, text: 'Very Much' },
            { value: 2, text: 'like it' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'a little' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Rating'
        },
        {
          question: 'How likely are you to share/recommend the video?',
          responses: [
            { value: 1, text: 'Very likely' },
            { value: 2, text: 'Likely' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'little likely' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Share/Recommend Likelihood'
        },
        {
          question: 'How likely are you going to watch the video again?',
          responses: [
            { value: 1, text: 'Very likely' },
            { value: 2, text: 'Likely' },
            { value: 3, text: 'Neutral' },
            { value: 4, text: 'little likely' },
            { value: 5, text: 'Not at all' },
          ],
          id: 'Rewatch Likelihood'
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
            'The fact-checking algorithm is a programmed and tested system to identify false information by looking for common patterns, words, and symbols that typically appear in fake news. The results from the fact-checking system shows that your were wrong in correctly identiying the video. Do you want to revert your action in the previous step?',
          responses: [
            { value: 1, text: 'Yes' },
            { value: 2, text: 'No' },
          ],
          id: 'Revert'
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
            'We give you another chance to think about your action of flagging/not flagging the video. Do you want to revert your action in the previous step?',
          responses: [
            { value: 1, text: 'Yes' },
            { value: 2, text: 'No' },
          ],
          id: 'Revert'
        },
      ],
    },
    surveyType: 'DV_SURVEY',
  },
];
