import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';
import { shuffle } from 'lodash';
import { IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
//import counter1 from './images/counter1.png'
//import counter2 from './counter2.png'
//import counter3 from './counter3.png'
import Box from '@material-ui/core/Box';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
//import { Row, Col } from 'react-simple-flex-grid';


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
      name:
        "Covid-19 Vaccine: It's Not Just Anti-Vaxxers That Are Worried",
      description:
        "Would you take a Covid-19 vaccine? Bloomberg Opinion's Therese Raphael, below, explains why it is not just anti-vaxxers that may be worried",
      url: 'https://www.youtube.com/watch?v=Qgk9ofpMN34',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter1.png',
    },
    {
      name: 'Covid-19: why vaccine mistrust is growing | The Economist',
      description:
        'A vaccine for covid-19 could be rolled out before the end of the year. But a worrying rise in mistrust of vaccines threatens its effectiveness. Now & Next is a series from The Economist Films',
      url: 'https://www.youtube.com/watch?v=BJ2rT7h70QM',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter3.png',
    },
    {
      name: 'COVID-19: Why are some people hesitant about taking the coronavirus vaccine?',
      description:
        'The government campaign to vaccinate the population relies on people having immunity against COVID-19. But up to 12% of people will delay or avoid having the vaccine ',
      url: 'https://www.youtube.com/watch?v=mfG-fBYYAiM',
      type: 'COUNTER',
      logo: process.env.PUBLIC_URL + './images/counter2.png',
    },
    {
      name:
        'Benefits of COVID-19 vaccine outweigh risks',
      description:
        'As with other vaccines, the experience of mild symptoms from side effects generally resolve within a few days. The benefits of the COVID-19 vaccination far outweigh the risk of any potential adverse effects. ',
      url: 'https://youtu.be/C8Jsq7YW298',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro1.png',
    },
    {
      name: 'Single-dose vaccine effective against COVID-19 variants, data shows | WNT',
      description:
        'The Food and Drug Administration announced that Johnson & Johnson’s one-shot vaccine meets the requirements of the emergency use authorization review process. Authorization could come on Friday.',
      url: 'https://www.youtube.com/watch?v=VPswkhGNI5g',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro2.png',
    },
    {
      name: 'Top Pfizer scientist discusses COVID-19 vaccine\'s efficacy and new variants',
      description:
        'Pfizer announced it will supply 200 million doses of its COVID-19 vaccine for the U.S. by the end of May and is aiming to ship 2 billion doses globally this year. The vaccine is over 90% effective according to clinical trials conducted in 2020, but more testing needs to be done to see how well it protects against the new variants. ',
      url: 'https://www.youtube.com/watch?v=a6wiBP7N5yE',
      type: 'PRO',
      logo: process.env.PUBLIC_URL + './images/pro3.png',
    },
  ];
  const shuffled_list = shuffle(videoslist);
  return (
    <div className={classes.videoRoot}>
      <h1 className={classes.title}> Please Select A Video To Watch Next </h1>
      <div className={classes.videoWrapper}>

        {shuffled_list.map((video, index) => (
          <div className={classes.thumbnailContainer}>


            <Box border={2} textAlign='center'>
              <h3>{video.name}</h3>
              <div>
                <img src={video.logo} alt='video image' width="150px" height="150px" />
              </div>
              <div>
                <IconButton>
                  <ThumbUp />
                </IconButton>
                <IconButton>
                  <ThumbDown />
                </IconButton>
              </div>
              <div>
                {video.description}
              </div>
            </Box>


          </div>
        ))}

      </div>
    </div>
  );
};

export default VideoListPage;
