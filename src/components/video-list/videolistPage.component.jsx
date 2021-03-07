import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';
import { shuffle } from 'lodash';
import VideoListItem from './videolist-item.component';
import { List } from '@material-ui/core';

const useStyles = makeStyles({
  videoRoot: {
    rows: '2 asuto',
  },
  vidoetitle: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  videoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px 0',
    columns: '2 auto',
    // padding: '0 100px 0 100px',
  },
  thumbnailContainer: {
    flex: 1,
    flexGrow: 1,
    flexWrap: true,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'center',
    //color: theme.palette.text.secondary,
  },
});

const { useState } = React;

const VideoListPage = () => {
  const classes = useStyles();
  const imgIndex = React.useState(Math.floor(Math.random(6)));
  let numRows = 3;
  const videoslist = [
    {
      name: "Covid-19 Vaccine: It's Not Just Anti-Vaxxers That Are Worried",
      description:
        "Would you take a Covid-19 vaccine? Bloomberg Opinion's Therese Raphael, below, explains why it is not just anti-vaxxers that may be worried",
      url: 'https://www.youtube.com/watch?v=Qgk9ofpMN34',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter1.png',
      id: 'v1',
    },
    {
      name: 'Covid-19: why vaccine mistrust is growing | The Economist',
      description:
        'A vaccine for covid-19 could be rolled out before the end of the year. But a worrying rise in mistrust of vaccines threatens its effectiveness. Now & Next is a series from The Economist Films',
      url: 'https://www.youtube.com/watch?v=BJ2rT7h70QM',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter3.png',
      id: 'v2',
    },
    {
      name:
        'COVID-19: Why are some people hesitant about taking the coronavirus vaccine?',
      description:
        'The government campaign to vaccinate the population relies on people having immunity against COVID-19. But up to 12% of people will delay or avoid having the vaccine ',
      url: 'https://www.youtube.com/watch?v=mfG-fBYYAiM',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter2.png',
      id: 'v3',
    },
    {
      name: 'Benefits of COVID-19 vaccine outweigh risks',
      description:
        'As with other vaccines, the experience of mild symptoms from side effects generally resolve within a few days. The benefits of the COVID-19 vaccination far outweigh the risk of any potential adverse effects. ',
      url: 'https://youtu.be/C8Jsq7YW298',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro1.png',
      id: 'v4',
    },
    {
      name:
        'Single-dose vaccine effective against COVID-19 variants, data shows | WNT',
      description:
        'The Food and Drug Administration announced that Johnson & Johnson’s one-shot vaccine meets the requirements of the emergency use authorization review process. Authorization could come on Friday.',
      url: 'https://www.youtube.com/watch?v=VPswkhGNI5g',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro2.png',
      id: 'v5',
    },
    {
      name:
        "Top Pfizer scientist discusses COVID-19 vaccine's efficacy and new variants",
      description:
        'Pfizer announced COVID-19 vaccine is over 90% effective according to clinical trials conducted in 2020, but more testing needs to be done to see how well it protects against the new variants. ',
      url: 'https://www.youtube.com/watch?v=a6wiBP7N5yE',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro3.png',
      id: 'v6',
    },
  ];
  const shuffled_list = shuffle(videoslist);
  // let noOfVideosLiked = 0;
  // const videoliked = () => {
  //   noOfVideosLiked++;
  //   if (noOfVideosLiked == 3) {
  //     console.log('inside videolist liked');
  //     proceedButtonEnable();
  //   }
  // };
  return (
    <div className={classes.videoRoot}>
      <h1 className={classes.title}>
        {' '}
        Please read the tiltle and description of each video. Carefully evaluate
        the information and like AT LEAST THREE videos here.{' '}
      </h1>

      <div className={classes.videoWrapper}>
        {/* <List> */}
        {shuffled_list.map((video, index) => (
          <VideoListItem key={video.id} video={video} />
        ))}
        {/* </List> */}
      </div>
    </div>
  );
};

export default VideoListPage;
