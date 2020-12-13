import React from 'react';
import ReactPlayer from 'react-player';
import NewComment from './comments.component';
import VideoReactions from './reactions.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    display: 'flex',
    overflowY: 'auto',
    alignItems: 'inherit',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  root: {
    width: '60%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    alignItems: 'inherit',
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

const VideoPlayer = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <h2 className={classes.title}> Chris Pratt on Trump </h2>
        <div className={classes.videoPlayerContainer}>
          <ReactPlayer
            className={classes.video}
            url='https://youtu.be/hoNb6HuNmU0'
            controls={true}
            width='100%'
            height='100%'
            //height='56.25%'
          />
        </div>

        <div className={classes.viewsAndIcons}>
          <div className={classes.views}> Views: 40,236</div>
          <div className={classes.icons}>
            <VideoReactions />
          </div>
        </div>
        <div className={classes.comments}>
          <NewComment />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
