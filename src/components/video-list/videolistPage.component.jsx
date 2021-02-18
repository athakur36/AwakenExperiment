import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';
import { shuffle } from 'lodash';
import { IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

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
});

const { useState } = React;

const VideoListPage = () => {
  const classes = useStyles();
  const imgIndex = React.useState(Math.floor(Math.random(6)));
  const videoslist = [
    {
      name:
        'Why Black and Latino communities are hesitant to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=MrmiEBmeumA',
      type: 'COUNTER',
      logo: 'https://picsum.photos/150/150?1',
    },
    {
      name: 'Covid-19: why vaccine mistrust is growing | The Economist',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=BJ2rT7h70QM',
      type: 'COUNTER',
      logo: 'https://picsum.photos/150/150?2',
    },
    {
      name: 'Why white communities are hesitant to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=4DOWd04iNFM',
      type: 'COUNTER',
      logo: 'https://picsum.photos/150/150?3',
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
          <div key={index} className={classes.thumbnailContainer}>
            <h3>{video.name}</h3>
            <div>
              <img src={video.logo} alt='video image' />
            </div>
            <div>
              <IconButton
              // className={
              //   video.like
              //     ? classes.LikedDislikedButton
              //     : classes.LikeDislikeButton
              // }
              // onClick={() => {
              //   console.log('like pressed!');
              //   if (video.like === false) {
              //     video.like = true;
              //     console.log('inside onclick');
              //   }
              // }}
              >
                <ThumbUp />
              </IconButton>
              <IconButton
              // className={
              //   video.dislike
              //     ? classes.LikedDislikedButton
              //     : classes.LikeDislikeButton
              // }
              // onClick={() => {
              //   //save the interacion in the database
              //   if (video.dislike === false) {
              //     video.dislike = true;
              //   }
              // }}
              >
                <ThumbDown />
              </IconButton>
            </div>
            <div>{video.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoListPage;
