import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import HappyIcon from '@material-ui/icons/Mood';
import SadIcon from '@material-ui/icons/MoodBad';
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import DisatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import ShareIcon from '@material-ui/icons/Share';
import FlagIcon from '@material-ui/icons/Flag';

// const useStyles = makeStyles({
//   enabled: {
//     fontSize: '1rem',
//     // padding: '5px 10px',
//     color: '#585858',
//   },

//   disabled: {
//     fontWeight: 'bold',
//     color: '#1565c0',
//   },
// });

class VideoReactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reaction: 'none',
      flagged: false,
      shared: false,
      userID: '',
      videoID: '',
    };
    this.handleActiveReaction = this.handleActiveReaction.bind(this);
    this.toggleShareState = this.toggleShareState.bind(this);
    this.toggleFlagState = this.toggleFlagState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleActiveReaction(icon) {
    this.setState({ reaction: icon });
    //VideoReactionData['Reaction'] = icon
    localStorage.setItem('Reaction', icon)
    console.log(localStorage)
  }

  toggleShareState() {
    //VideoReactionData['Shared'] = !this.state.shared
    localStorage.setItem('Shared', !this.state.shared)
    console.log(localStorage)
    this.setState({ shared: !this.state.shared });
  }

  toggleFlagState() {
    //VideoReactionData['Flagged'] = !this.state.flagged
    localStorage.setItem('Flagged', !this.state.flagged);
    console.log(localStorage)
    this.setState({ flagged: !this.state.flagged });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Submitted');
    //const reactionRef = firebase.database().ref('reaction');
    const reaction = {
      reaction: this.state.reaction,
      flagged: this.state.flagged,
      shared: this.state.shared,
      user: this.state.userID,
      videoID: this.state.videoID,
    };
    //reactionRef.push(reaction);
    this.setState({
      reaction: '',
      flagged: false,
      shared: false,
      userID: '',
      videoID: '',
    });
  }

  render() {
    // const classes = useStyles();

    return (
      <div>
        <IconButton
          // className='iconHappy'
          style={{ color: this.state.reaction === "Happy" ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={() => {
            this.handleActiveReaction('Happy');
          }}
        >
          <HappyIcon />
        </IconButton>
        <IconButton
          // className='iconSatisfied'
          style={{ color: this.state.reaction === "Satisfied" ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={() => {
            this.handleActiveReaction('Satisfied');
          }}
        >
          <SatisfiedIcon />
        </IconButton>
        <IconButton
          // className='iconDissatisfied'
          style={{ color: this.state.reaction === "Dissatisfied" ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={() => {
            this.handleActiveReaction('Dissatisfied');
          }}
        >
          <DisatisfiedIcon />
        </IconButton>
        <IconButton
          // className='iconSad'
          style={{ color: this.state.reaction === "Sad" ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={() => {
            this.handleActiveReaction('Sad');
          }}
        >
          <SadIcon />
        </IconButton>
        <IconButton
          // className='iconShare'
          style={{ color: this.state.shared ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={this.toggleShareState}>
          <ShareIcon />
        </IconButton>
        <IconButton
          // className='iconFlag'
          style={{ color: this.state.flagged ? '#1565c0' : 'rgba(0, 0, 0, 0.54)' }}
          onClick={this.toggleFlagState}>
          <FlagIcon />
        </IconButton>
      </div>
    );
  }
}

export default VideoReactions;
