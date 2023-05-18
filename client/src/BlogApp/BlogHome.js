import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent', // Set the background to transparent
        padding: theme.spacing(8.5),
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    card: {
      backgroundColor: '#fff',
      padding: theme.spacing(2),
      borderRadius: 8,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      width: '60%',
      maxHeight: '80vh',
      overflowY: 'auto',
      position: 'relative', // Add position relative to make the close icon absolute positioned
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      cursor: 'pointer',
    },
    title: {
      color: '#333',
      marginBottom: theme.spacing(2),
    },
    blogContainer: {
      marginBottom: theme.spacing(2),
    },
    blogTitle: {
      marginBottom: theme.spacing(1),
      color: '#333',
    },
    blogDescription: {
      color: '#666',
    },
    readMoreLink: {
      color: '#007bff',
      textDecoration: 'none',
      alignSelf: 'flex-end',
      fontWeight: 'bold',
    },
    blogCard: {
        backgroundColor: '#f9f9f9',
        padding: theme.spacing(2),
        borderRadius: 8,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      
  }));
  
  const TrendingBlogs = () => {
    const classes = useStyles();
    const [blogs, setBlogs] = useState([]);
  
    // useEffect(() => {
    //   const fetchTrendingBlogs = async () => {
    //     try {
    //       const response = await axios.get('https://newsapi.org/v2/everything', {
    //         params: {
    //           q: 'health fitness sports',
    //           language: 'en',
    //           sortBy: 'popularity',
    //           apiKey: '792d4efb419f4ac49d8e9da7402eb0fb', // Replace with your News API key
    //         },
    //       });
    //       setBlogs(response.data.articles);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchTrendingBlogs();
    // }, []);

    
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual Guardian API key
        const apiKey = '9e2963f7-f605-4557-8850-3d4b8ba876d4';
        const section = 'sport'; // Replace with the desired section (e.g., 'sport', 'fitness')

        const response = await fetch(
          `https://content.guardianapis.com/search?api-key=${apiKey}&section=${section}&order-by=newest`
        );

        if (response.ok) {
          const data = await response.json();
          setBlogs(data.response.results);
          console.log(data)
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogs();
  }, []);
  
    const handleRefresh = () => {
      window.location.reload(); // Refresh the page
    };
  
    return (
        <div className={classes.root}>
          <div className={classes.card}>
            <CloseIcon className={classes.closeButton} onClick={handleRefresh} />
            <Typography variant="h4" component="h1" className={classes.title}>
              Trending Blogs on Health, Fitness, and Sports
            </Typography>
            {blogs.map((blog) => (
              <div key={blog.title} className={classes.blogContainer}>
                <div className={classes.blogCard}>
                  <Typography variant="h5" component="h2" className={classes.blogTitle}>
                    {blog.webTitle}
                  </Typography>
                  <Typography variant="body1" className={classes.blogDescription}>
                    {blog.description}
                  </Typography>
                  <a href={blog.webUrl} target="_blank" rel="noopener noreferrer" className={classes.readMoreLink}>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
  };
  
  export default TrendingBlogs;
  
