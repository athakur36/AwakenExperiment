import React, { useState } from 'react';
import {
  TextField,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

const useStyles = makeStyles({
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
  LikeDislikeButton: {
    fontSize: '1rem',
    // padding: '5px 10px',
    color: '#585858',
  },

  LikedDislikedButton: {
    fontWeight: 'bold',
    color: '#1565c0',
  },
});

const Comment = ({ comment }) => {
  const classes = useStyles();

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div>
      {/* {console.log(comment.text)} */}
      <ListItem key={comment.ID}>
        <ListItemIcon>
          <AccountCircleIcon />
          <div>
            <div className={classes.NameWrapper}>
              {comment.commentorName}
            </div>
            <div>
              <ListItemText
                className={classes.CommentListItem}
                primary={comment.text}
              />
            </div>
            <div>
              <IconButton
                className={
                  liked
                    ? classes.LikedDislikedButton
                    : classes.LikeDislikeButton
                }
                onClick={() => {
                  console.log('like pressed on new component: ' + !liked);

                  setLiked(!liked);
                  setDisliked(false);
                  // if (comment.like === false) {
                  //   comment.like = true;
                  //   console.log('inside onclick');
                  // }
                }}
              >
                <ThumbUp />
              </IconButton>
              <IconButton
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
              </IconButton>
            </div>
          </div>
        </ListItemIcon>
      </ListItem>
    </div>
  );
}

export default Comment;