import React, { useState } from 'react';

const commentsArray = [
  "Let me guess, they're called Tonald Drump and Kared Jushner.",
  'I have really crazy allergies and I will STILL get it. I’ll make sure to have my epinephrine ready...maybe take a dose of Benadryl beforehand, if my doc okays it. Still absolutely worth the risk.',
  'I understand the concern. However, if you watch US television you are inundated with medical commercials. Many of them life saving treatments for cancer and other serious ailments.',
  'People with severe allergies should definitely be more careful.',
  'People who have severe allergies should not be getting any sort of flu shot or in this case Covid shot. That should be the headline not the one that’s scaring everybody to death.',
];

const Comments = () => {
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
        {/* use TextField instead of textarea */}
        {/* <TextField variant='outlined' fullWidth /> */}
        {/* use List Text with Icon from Material */}
        {commentsArray.map((comment) => (
          <div>{comment}</div>
        ))}
        <textarea
          type='text'
          name='comment'
          className='form-control'
          placeholder='Type a comment here'
          onChange={handleChange}
          value={comment}
        />
        {/* use material button */}
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Comments;
