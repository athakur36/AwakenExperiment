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

const commentsArray = [
  "Let me guess, they're called Tonald Drump and Kared Jushner.",
  'I have really crazy allergies and I will STILL get it. I’ll make sure to have my epinephrine ready...maybe take a dose of Benadryl beforehand, if my doc okays it. Still absolutely worth the risk.',
  'I understand the concern. However, if you watch US television you are inundated with medical commercials. Many of them life saving treatments for cancer and other serious ailments.',
  'People with severe allergies should definitely be more careful.',
  'People who have severe allergies should not be getting any sort of flu shot or in this case Covid shot. That should be the headline not the one that’s scaring everybody to death.',
];

const DVSurvey = () => {
  const [comment, setComment] = useState('test comment');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    // submit comment to firebase
  };

  return (
    <section className='display-comment'>
      <form onSubmit={handleSubmit}>
        <List>
          {commentsArray.map((comment) => (
            <div>
              <ListItem key={comment.key}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={comment} />
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
};

export default DVSurvey;
