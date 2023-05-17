import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    width: '400px',
    padding: theme.spacing(4),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    backgroundColor: '#fff',
    backgroundImage: `url(https://i.pinimg.com/564x/a7/46/c5/a746c5bb7d8657acbdf62027c966bda4.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontWeight: 'bold',
  },
}));

const BlogPostingPage = () => {
    const classes = useStyles();
  
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleVideoUrlChange = (event) => {
      setVideoUrl(event.target.value);
    };
  
    const handleImageUrlChange = (event) => {
      setImageUrl(event.target.value);
    };
  
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform your blog post submission logic here
      const blogPost = {
        title,
        videoUrl,
        imageUrl,
        content,
      };
  
      console.log(blogPost);
      // You can send the blogPost object to your backend for further processing
  
      // Clear the form inputs after submission
      setTitle('');
      setVideoUrl('');
      setImageUrl('');
      setContent('');
    };
  
    return (
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <Typography variant="h4" align="center" gutterBottom>
            Create a Blog Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              value={title}
              onChange={handleTitleChange}
              fullWidth
              className={classes.formInput}
              size="small"
            />
            <TextField
              label="Video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
              fullWidth
              className={classes.formInput}
              size="small"
            />
            <TextField
              label="Image URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
              fullWidth
              className={classes.formInput}
              size="small"
            />
            <TextField
              label="Content"
              value={content}
              onChange={handleContentChange}
              multiline
              rows={4}
              fullWidth
              className={classes.formInput}
              size="small"
            />
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </div>
      </div>
    );
  };
  
  export default BlogPostingPage;