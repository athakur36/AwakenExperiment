import Sct from "../components/questionnaire-format/sct.component";

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
        { text: "Raising a family", type: "SCT" },
        { text: "When I am criticized", type: "SCT" },
        { text: "Being with other people", type: "SCT" },
        { text: "The thing I like about myself is", type: "SCT" },
        { text: "What gets me into trouble is", type: "SCT" },
        { text: "Crime and delinquency could be halted if", type: "SCT" },
        { text: "Business and society", type: "SCT" },
        { text: "Rules are", type: "SCT" },
        { text: "I just can’t stand people who", type: "SCT" },
        { text: "My main problem is", type: "SCT" },
        { text: "People who step out of line", type: "SCT" },
        { text: "A partner has the right to...", type: "SCT" },
        { text: "If I were in charge", type: "SCT" },
        { text: "Technology", type: "SCT" },
        { text: "My conscience bothers me if", type: "SCT" },
      ],
    },
    surveyType: "SCT",
    step: 1,
  },
  {
    surveyData: {
      intro: `asoidhashneed to write an essay
            for each: completing the sentence with some 4-12 words is enough.`,
      questions: [
        { text: "Raising a family", type: "radio" },
        { text: "When I am criticized", type: "radio" },
        { text: "Being with other people", type: "radio" },
        { text: "The thing I like about myself is", type: "radio" },
        { text: "What gets me into trouble is", type: "radio" },
      ],
    },
    surveyType: "LIKERT_MULTIPLE",
    step: 2,
  },
  {
    surveyData: {
      intro: `asoidhashneed to write an essay
            for each: completing the sentence with some 4-12 words is enough.`,
      questions: [
        { text: "Raising a family", type: "radio" },
        { text: "When I am criticized", type: "SCT" },
        { text: "Being with other people", type: "SCT" },
        { text: "The thing I like about myself is", type: "SCT" },
        { text: "What gets me into trouble is", type: "SCT" },
      ],
    },
    surveyType: "LIKERT_MATRIX",
    step: 3,
  },
  {
    surveyData: {
      intro: `asoidhashneed to write an essay
            for each: completing the sentence with some 4-12 words is enough.`,
      questions: [
        { text: "Raising a family", type: "SCT" },
        { text: "When I am criticized", type: "SCT" },
        { text: "Being with other people", type: "SCT" },
        { text: "The thing I like about myself is", type: "SCT" },
        { text: "What gets me into trouble is", type: "SCT" },
      ],
    },
    surveyType: "SCT",
    step: 4,
  },
];
