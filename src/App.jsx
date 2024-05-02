import React from 'react'
import Article from './components/Article'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import About from './components/About'

function App() {
  return (
    <div>
    <Header name={name} />
    <ArticleList posts={posts} />
    <About image={image} about={about} />
  </div>
);
}

export default App;