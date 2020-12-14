import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

const useStyles = makeStyles({
  title: {},
  videoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px 0',
  },
});

const { useState } = React;

const VideoListPage = () => {
  const classes = useStyles();

  const [counterVideos] = useState([
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
      name:
        'Why Black and Latino communities are hesitant to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=4DOWd04iNFM',
      type: 'COUNTER',
      logo: 'https://picsum.photos/150/150?3',
    },
  ]);

  const [proVideos] = useState([
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
      name:
        'Why Black and Latino communities are hesitant to take COVID-19 vaccine | GMA',
      description:
        'One of the major hurdles facing the coronavirus vaccine is getting people to take it, and this issue of trust is especially present in Black and Latino communities.',
      url: 'https://www.youtube.com/watch?v=4DOWd04iNFM',
      type: 'COUNTER',
      logo: 'https://picsum.photos/150/150?3',
    },
  ]);

  return (
    <div>
      <h1 className={classes.title}> Please Select A Video To Watch Next </h1>
      <div className={classes.videoWrapper}>
        {counterVideos.map((counterVideo, index) => (
          <div className={classes.thumbnailContainer}>
            <div>{counterVideo.name}</div>
            <div>
              <img src={counterVideo.logo} alt='video image' />
            </div>
            <div>{counterVideo.description}</div>
          </div>
        ))}
      </div>
      <div className={classes.videoWrapper}>
        {proVideos.map((proVideo, index) => (
          <div className={classes.thumbnailContainer}>
            <div>{proVideo.name}</div>
            <div>
              <img src={proVideo.logo} alt='video image' />
            </div>
            <div>{proVideo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoListPage;
