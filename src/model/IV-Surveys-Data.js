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
        { text: 'Raising a family', type: 'SCT', id: '1-1' },
        { text: 'When I am criticized', type: 'SCT', id: '1-2' },
        { text: 'Being with other people', type: 'SCT', id: '1-3' },
        { text: 'The thing I like about myself is', type: 'SCT', id: '1-4' },
        { text: 'Raising a family', type: 'SCT', id: '1-5' },
        { text: 'When I am criticized', type: 'SCT', id: '1-6' },
        { text: 'Being with other people', type: 'SCT', id: '1-7' },
        { text: 'The thing I like about myself is', type: 'SCT', id: '1-8' },
        { text: 'Raising a family', type: 'SCT', id: '1-9' },
        { text: 'When I am criticized', type: 'SCT', id: '1-10' },
        { text: 'Being with other people', type: 'SCT', id: '1-11' },
        { text: 'The thing I like about myself is', type: 'SCT', id: '1-12' },
      ],
    },
    surveyType: 'SCT_SURVEY',
    step: 1,
  },
  {
    surveyData: {
      intro: `Please select the option which appears closest to your answer.`,
      questions: [
        {
          text: 'I am not a worrier',
          type: 'RADIO',
          scale: 5,
          id: '2-1',
        },
        {
          text: 'At times I feel bitter and resentful',
          type: 'RADIO',
          scale: 5,
          id: '2-2',
        },
        {
          text: 'I am not a worrier',
          type: 'RADIO',
          scale: 5,
          id: '2-3',
        },
        {
          text: 'At times I feel bitter and resentful',
          type: 'RADIO',
          scale: 5,
          id: '2-4',
        },
        {
          text: 'I am not a worrier',
          type: 'RADIO',
          scale: 5,
          id: '2-5',
        },
      ],
    },
    surveyType: 'LIKERT_MATRIX_SURVEY',
    step: 2,
  },
  {
    surveyData: {
      intro: `Please select the option which appears closest to your answer`,
      questions: [
        {
          text: 'In most ways my life is close to ideal', type: 'RADIO', scale: 5,
          type: 'RADIO_MATRIX',
          id: '3-1',
        },
        {
          text: 'Conditions of my life is excellent',
          type: 'RADIO_MATRIX',
          id: '3-2',
        },
        {
          text: 'I am satisfied with my life',
          type: 'RADIO_MATRIX',
          id: '3-3',
        },
        {
          text: 'SO far I have gotten important things I want in my life',
          type: 'RADIO_MATRIX',
          id: '3-4',
        },
        {
          text: 'If I could live my life over I would change nothing',
          type: 'RADIO_MATRIX',
          id: '3-5',
        },
      ],
    },
    surveyType: 'LIKERT_MATRIX_SURVEY',
    step: 3,
  },
  {
    surveyData: {
      intro: `Please select the option which appears closest to your answer`,
      questions: [
        {
          text:
            'The modern scientific evidence confirms the connection of vaccines with chronic illnesses such as autism, diabetes and multiple sclerosis.',
          type: 'RADIO_MATRIX',
          id: '4-1',
        },
        {
          text: 'Vaccines are 100% efficient.',
          type: 'RADIO_MATRIX',
          id: '4-2',
        },
        {
          text: 'I am satisfied with my life',
          type: 'RADIO_MATRIX',
          id: '4-3',
        },
        {
          text: 'Covid-19 vaccination is safe to take',
          type: 'RADIO_MATRIX',
          id: '4-4',
        },
      ],
    },
    surveyType: 'LIKERT_MATRIX_SURVEY',
    step: 4,
  },
];
