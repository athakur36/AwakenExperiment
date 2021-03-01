import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExpVideosData } from '../../model/VideosData';
import VideoPlayer from '../video-player/videoplayer.component';

const useStyles = makeStyles({
  root: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  title: {},
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: 'center',
  },
  videoPlayerContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
  },
  viewsAndIcons: {
    display: 'flex',
    width: '100%',
    height: '100px',
    justifyContent: 'space-between',
  },
  views: {
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  comments: {},
});

const NegativityBiasExperiment = () => {
  const classes = useStyles();
  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );
  if (experimentCondition === 0) {
    return <VideoPlayer videoData={ExpVideosData[4]} showComments={false} />;
  } else {
    localStorage.setItem('commentType', JSON.stringify(1));
    return <VideoPlayer videoData={ExpVideosData[5]} showComments={false} />;
  }
};

export default NegativityBiasExperiment;
