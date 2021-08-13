import React from 'react';
import './App.css';
import './components/PostForm';
import PostForm from './components/PostForm';
import './components/PostIt.css';
import PostCard from './components/PostCard';




function App(props) {
  const postObj = [
    {
      title: 'title will be shown here',
      text: ' write some quote!',
      url: 'https://images.unsplash.com/photo-1628626110189-f963f1ec6755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
      category: 'books',
    }
  ]
  return (
    <div>
      <PostForm />
      <PostCard items={postObj}  />
    </div>
    
    
  );
}

export default App;
