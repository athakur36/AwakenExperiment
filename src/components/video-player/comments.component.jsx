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
import { useContext } from 'react';
import { UserContext } from './../../constants/context.component';

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
    padding: '5px 10px',
    color: '#585858',
  },

  LikedDislikedButton: {
    fontWeight: 'bold',
    color: '#1565c0',
  },
});
const vaccinecommentsArray_pro = [
  {
    text: "Let me guess, they're called Tonald Drump and Kared Jushner.",
    ID: 'pro_cmnt1',
    commentorName: 'adam',
    like: false,
    dislike: false,
  },
  {
    text:
      'I have really crazy allergies and I will STILL get it. I’ll make sure to have my epinephrine ready...maybe take a dose of Benadryl beforehand, if my doc okays it. Still absolutely worth the risk.',
    ID: 'pro_cmnt2',
    commentorName: 'William',
    like: false,
    dislike: false,
  },

  {
    text:
      'I understand the concern. However, if you watch US television you are inundated with medical commercials. Many of them life saving treatments for cancer and other serious ailments.',
    ID: 'pro_cmnt3',
    commentorName: 'Rashi',
    like: false,
    dislike: false,
  },
  {
    text: 'People with severe allergies should definitely be more careful.',
    ID: 'pro_cmnt4',
    commentorName: 'Martin',
    like: false,
    dislike: false,
  },

  {
    text:
      'People who have severe allergies should not be getting any sort of flu shot or in this case Covid shot. That should be the headline not the one that’s scaring everybody to death.',
    ID: 'pro_cmnt5',
    commentorName: 'Michael',
    like: false,
    dislike: false,
  },
];

const vaccinecommentsArray_anti = [
  {
    text: 'This is anti test comment',
    ID: 'pro_cmnt1',
    commentorName: 'adam',
    like: false,
    dislike: false,
  },
  {
    text:
      'I have really crazy allergies and I will STILL get it. I’ll make sure to have my epinephrine ready...maybe take a dose of Benadryl beforehand, if my doc okays it. Still absolutely worth the risk.',
    ID: 'pro_cmnt2',
    commentorName: 'William',
    like: false,
    dislike: false,
  },

  {
    text:
      'I understand the concern. However, if you watch US television you are inundated with medical commercials. Many of them life saving treatments for cancer and other serious ailments.',
    ID: 'pro_cmnt3',
    commentorName: 'Rashi',
    like: false,
    dislike: false,
  },
  {
    text: 'People with severe allergies should definitely be more careful.',
    ID: 'pro_cmnt4',
    commentorName: 'Martin',
    like: false,
    dislike: false,
  },

  {
    text:
      'People who have severe allergies should not be getting any sort of flu shot or in this case Covid shot. That should be the headline not the one that’s scaring everybody to death.',
    ID: 'pro_cmnt5',
    commentorName: 'Michael',
    like: false,
    dislike: false,
  },
];

const Comments = () => {
  const [comment, setComment] = useState('test comment');
  const classes = useStyles();
  const user = useContext(UserContext);

  const handleActiveReaction = (icon) => {
    // toggle like-dislike button and save to firebase
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    // submit comment to firebase
  };
  if (user.commentType === 0) {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <List>
            {vaccinecommentsArray_pro.map((comment, index) => (
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
                            comment.like
                              ? classes.LikedDislikedButton
                              : classes.LikeDislikeButton
                          }
                          onClick={() => {
                            console.log('like pressed!');
                            if (comment.like === false) {
                              comment.like = true;
                              console.log('inside onclick');
                            }
                          }}
                        >
                          <ThumbUp />
                        </IconButton>
                        <IconButton
                          className={
                            comment.dislike
                              ? classes.LikedDislikedButton
                              : classes.LikeDislikeButton
                          }
                          onClick={() => {
                            //save the interacion in the database
                            if (comment.dislike === false) {
                              comment.dislike = true;
                            }
                          }}
                        >
                          <ThumbDown />
                        </IconButton>
                      </div>
                    </div>
                  </ListItemIcon>
                </ListItem>
              </div>
            ))}
          </List>
          {/* add classes and give padding for submit button */}
          <div>
            <TextField
              variant='outlined'
              fullWidth
              placeholder='Type a comment here'
            />
            <Button variant='contained' color='primary'>
              Submit
            </Button>
          </div>
        </form>
      </section>
    );
  } else {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <List>
            {vaccinecommentsArray_anti.map((comment, index) => (
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
                            comment.like
                              ? classes.LikedDislikedButton
                              : classes.LikeDislikeButton
                          }
                          onClick={() => {
                            console.log('like pressed!');
                            if (comment.like === false) {
                              comment.like = true;
                              console.log('inside onclick');
                            }
                          }}
                        >
                          <ThumbUp />
                        </IconButton>
                        <IconButton
                          className={
                            comment.dislike
                              ? classes.LikedDislikedButton
                              : classes.LikeDislikeButton
                          }
                          onClick={() => {
                            //save the interacion in the database
                            if (comment.dislike === false) {
                              comment.dislike = true;
                            }
                          }}
                        >
                          <ThumbDown />
                        </IconButton>
                      </div>
                    </div>
                  </ListItemIcon>
                </ListItem>
              </div>
            ))}
          </List>
          {/* add classes and give padding for submit button */}
          <div>
            <TextField
              variant='outlined'
              fullWidth
              placeholder='Type a comment here'
            />
            <Button variant='contained' color='primary'>
              Submit
            </Button>
          </div>
        </form>
      </section>
    );
  }
};

export default Comments;
