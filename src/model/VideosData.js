//import confirmation_pro from './../resources/videos/dwayne_pro_vaccine_sub.mp4';
export const ExpVideosData = [
  {
    step: 1,
    url: 'videos/dwayne_pro_vaccine_sub.mp4',
    type: 'PRO',
    title: 'Dwayne Johnson Promoting Covid-19 Vaccines',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '1,000',
    experiment: 'ConfirmationBias-T',
  },
  {
    step: 1,
    url: 'videos/dwayne_bad_vaccine_sub.mp4',
    type: 'COUNTER',
    title: 'Dwayne Johnson Opposing Covid-19 Vaccines',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '1,000',
    experiment: 'ConfirmationBias-C',
  },
  {
    step: 2,
    url: 'videos/popularity-treatment.mp4',
    type: 'Popular',
    title:
      'The Most Liked and Shared Indian Song on Social Media in 2020: Ramleela',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '8,000,000',
    experiment: 'PopularityBias-T',
  },
  {
    step: 2,
    url: 'videos/popularity_bias_control.mp4',
    type: 'Non-popular',
    title: 'Ramleela: Catchy Title Track of the Indian Movie Released in 2019',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '2,000',
    experiment: 'PopularityBias-C',
  },
  {
    step: 3,
    url: 'videos/negative_football_treatment.mp4',
    type: 'Negative',
    title: 'Announcer Losing it During the Game',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '2,000',
    experiment: 'NegativityBias-T',
  },
  {
    step: 3,
    url: 'videos/control_football_sub.mp4',
    type: 'Objective',
    title: 'Some Interesting Moments During The Game',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '2,000',
    experiment: 'NegativityBias-C',
  },
  {
    step: 4,
    url: 'videos/dwayne_intro.mov',
    type: 'CB',
    title: 'Dwayne Johnson Introducing Himself',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '2,000',
    experiment: 'CognitiveDissonance-T',
  },
  {
    step: 4,
    url: 'videos/dwayne_intro.mov',
    type: 'CB',
    title: 'Dwayne Johnson Introducing Himself',
    description: 'test description kjsaksa sjgfjkas jhsagkjas',
    numberOfViews: '2,000',
    experiment: 'CognitiveDissonance-C',
  },
];
