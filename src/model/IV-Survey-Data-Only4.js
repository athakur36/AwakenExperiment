export const IV_Surveys = [
    {
        surveyData: {
            intro: `Please select the option which appears closest to your answer`,
            questions: [
                {
                    text:
                        'The modern scientific evidence does not confirm the connection of vaccines with chronic illnesses such as autism, diabetes and multiple sclerosis.',
                    type: 'RADIO_MATRIX',
                    id: '4-1',
                },
                {
                    text: 'Vaccines are 100% efficient.',
                    type: 'RADIO_MATRIX',
                    id: '4-2',
                },
                {
                    text: 'Covid-19 vaccination is safe to take.',
                    type: 'RADIO_MATRIX',
                    id: '4-4',
                },
            ],
        },
        surveyType: 'LIKERT_MATRIX_SURVEY',
        step: 1,
    },
];
