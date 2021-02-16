import React from 'react';
import ReactPlayer from 'react-player';
import NewComment from './comments.component';
import VideoReactions from './reactions.component';
import { makeStyles } from '@material-ui/core/styles';

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

const VideoPlayer = ({ videoData }) => {
    const classes = useStyles();
    
        return (
          <div className={classes.root}>
            <h2 className={classes.title}>{videoData.title}</h2>
            <div className={classes.videoPlayerContainer}>
              <ReactPlayer
                className={classes.video}
                url={videoData.url}
                controls={true}
                width='100%'
                height='100%'
                //height='56.25%'
              />
            </div>
            <div className={classes.viewsAndIcons}>
              <div className={classes.views}> Views: {videoData.numberOfViews}</div>
              <div className={classes.icons}>
                <VideoReactions />
              </div>
            </div>
            <div className={classes.comments}>
              <NewComment />
            </div>
          </div>
        );
}

export default VideoPlayer;