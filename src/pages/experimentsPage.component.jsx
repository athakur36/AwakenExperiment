import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../components/video-player/videoplayer.component';

const useStyles = makeStyles({});

const ExperimentsPage = () => {
  const classes = useStyles();

  return <VideoPlayer />;
};

export default ExperimentsPage;
