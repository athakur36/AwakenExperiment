import { IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  NameWrapper: {
    fontWeight: 'bold',
  },
  CommentListItem: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    width: '700px',
  },
  title: {
    fontWeight: 'bold',
  },
  LikeDislikeButton: {
    fontSize: '1rem',
    // padding: '5px 10px',
    color: '#585858',
  },

  LikedDislikedButton: {
    fontWeight: 'bold',
    color: '#1565c0',
  },
  videoClick: {
    fontSize: '1rem',
    // padding: '5px 10px',
    color: '#585858',
  },

  videoClicked: {
    background: 'rgb(68, 196, 196)',
    cursor: 'pointer',
    border: '2px solid grey',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    maxHeight: 550,
    minHeight: 550,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const VideoListItem = ({ video }) => {
  const classes = useStyles();
  //   const [clicked, setClicked] = useState(false);
  //   const [v1clicked, setv1Clicked] = useState(false);
  //   const [v2clicked, setv2Clicked] = useState(false);
  //   const [v3clicked, setv3Clicked] = useState(false);
  //   const [v4clicked, setv4Clicked] = useState(false);
  //   const [v5clicked, setv5Clicked] = useState(false);
  //   const [v6clicked, setv6Clicked] = useState(false);
  const [liked, setLiked] = useState(false);
  //   const [disliked, setDisliked] = useState(false);
  console.log('video item:', video.id);
  return (
    <div
    //   className={clicked ? classes.videoClicked : classes.videoClick}
    //   onClick={() => {
    //     console.log('video box pressed on new component! ' + clicked);

    //     setClicked(!clicked);
    //   }}
    >
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={5}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  src={video.logo}
                  alt='video image'
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={3}>
                <Grid item xs>
                  <Typography
                    className={classes.title}
                    gutterBottom
                    variant='title'
                  >
                    {video.name}
                  </Typography>
                  <br />
                  <span>{video.description}</span>
                </Grid>
                <Grid item>
                  <IconButton
                    className={
                      liked
                        ? classes.LikedDislikedButton
                        : classes.LikeDislikeButton
                    }
                    onClick={() => {
                      console.log('like pressed on new component! ' + liked);

                      setLiked(!liked);
                      //   setDisliked(false);
                    }}
                  >
                    <ThumbUp />
                  </IconButton>
                  {/* <IconButton
                    className={
                      disliked
                        ? classes.LikedDislikedButton
                        : classes.LikeDislikeButton
                    }
                    onClick={() => {
                      //save the interacion in the database
                      setLiked(false);
                      setDisliked(!disliked);
                    }}
                  >
                    <ThumbDown />
                  </IconButton> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default VideoListItem;
