import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  const { id } = useParams();
  return <BlogDetails id={id} />;
};

export default BlogPage;