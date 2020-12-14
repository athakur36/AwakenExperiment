export const IV_Surveys = [
  {
    surveyData: {
      intro: `This study examines the relationship between digital conduct and the
            mind, in terms of meaning-making, outlooks on life, self-awareness, and
            consciousness traits, etc. Therefore, it is important that you are in the right mindset. Please
            plan for the appropriate space and time. It takes about 45 min. Please
            take the entire inventory when you are rested and not rushed, with no
            interruptions, in one sitting. Please also make sure that the responses
            communicate your authentic inner experience, not some superficial
            clichés. Your responses will be treated with the highest confidentially.  The exercise has 3 parts: open-ended sentence completions,
            multiple-choice questions, and social media interactions. We start with an invitation for self-reflection, which asks you to
            complete 16 incomplete sentences thoughtfully and honestly with your own
            words. There are no right or wrong responses. No need to write an essay
            for each: completing the sentence with some 4-12 words is enough.`,
      questions: [
        { text: 'Raising a family', type: 'SCT' },
        { text: 'When I am criticized', type: 'SCT' },
        { text: 'Being with other people', type: 'SCT' },
        { text: 'The thing I like about myself is', type: 'SCT' },
      ],
    },
    surveyType: 'SCT_SURVEY',
    step: 1,
  },
  {
    surveyData: {
      intro: `asoidhashneed to write an essay
            for each: completing the sentence with some 4-12 words is enough.`,
      questions: [
        { text: 'Raising a family', type: 'RADIO', scale: 5 },
        { text: 'When I am criticized', type: 'RADIO', scale: 5 },
        { text: 'Being with other people', type: 'RADIO', scale: 5 },
        { text: 'The thing I like about myself is', type: 'RADIO', scale: 5 },
        { text: 'What gets me into trouble is', type: 'RADIO', scale: 5 },
      ],
    },
    surveyType: 'SCT_SURVEY',
    step: 2,
  },
  {
    surveyData: {
      intro: `Please select the option which appears closest to your answer`,
      questions: [
        {
          text: 'In most ways my life is close to ideal',
          type: 'RADIO_MATRIX',
        },
        { text: 'Conditions of my life is excellent', type: 'RADIO_MATRIX' },
        { text: 'I am satisfied with my life', type: 'RADIO_MATRIX' },
        {
          text: 'SO far I have gotten important things I want in my life',
          type: 'RADIO_MATRIX',
        },
        {
          text: 'If I could live my life over I would change nothing',
          type: 'RADIO_MATRIX',
        },
      ],
    },
    surveyType: 'LIKERT_MATRIX_SURVEY',
    step: 3,
  },
];
