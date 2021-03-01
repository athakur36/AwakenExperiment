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
        'Why Black and Latino communities are willing to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=MrmiEBmeumA',
      type: 'PRO',
      logo: 'https://picsum.photos/150/150?1',
    },
    {
      name: 'Covid-19: why vaccine trust is growing | The Economist',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=BJ2rT7h70QM',
      type: 'PRO',
      logo: 'https://picsum.photos/150/150?2',
    },
    {
      name: 'Why white communities are willing to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=4DOWd04iNFM',
      type: 'PRO',
      logo: 'https://picsum.photos/150/150?3',
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
                <img src={video.logo} alt='video image' width = "150px" height="150px"/>
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
