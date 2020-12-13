import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

const useStyles = makeStyles({
  title: {
    width: '500px',
    marginTop: 50,
    textAlign: 'center',
    position: 'absolute',
    left: 50,
    top: 350,
  },
  photoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoCoverPhotos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    margin: '0 0 1em 0',
    padding: '1em',
    border: '1px solid black',
  },
});

const VideoLabel = ({ video, children }) => (
  <div>
    {video.name}
    {children}
  </div>
);

const { useState } = React;

const VideoListPage = () => {
  const classes = useStyles();

  const [videoCoverPhotos] = useState([
    {
      name: 'Video Title 1',
      views: '100',
      logo: 'https://picsum.photos/150/150?1',
    },
    {
      name: 'Video Title 2',
      views: '100',
      logo: 'https://picsum.photos/150/150?2',
    },
    {
      name: 'Video Title 3',
      views: '100',
      logo: 'https://picsum.photos/150/150?3',
    },
    {
      name: 'Video Title 4',
      views: '100',
      logo: 'https://picsum.photos/150/150?3',
    },
  ]);

  return (
    <div>
      <h1 className={classes.title}> Please Select A Video To Watch Next </h1>
      <div className='photoContainer'>
        {videoCoverPhotos.map((videoCoverPhoto, index) => (
          <VideoLabel key={index} video={videoCoverPhoto}>
            <Link to={'/videoplayer'}>
              <img
                className={classes.videoCoverPhotos}
                src={videoCoverPhoto.logo}
                alt='video image'
              />
            </Link>
          </VideoLabel>
        ))}
      </div>
    </div>
  );
};

export default VideoListPage;
