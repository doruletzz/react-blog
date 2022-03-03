import { useState } from 'react';
import BlogPostList from './components/BlogPostList';

import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPostContainer from './components/BlogPostContainer';
import BlogPost from './components/BlogPost';
import BlogPostListContainer from './components/BlogPostListContainer';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Provider store={store}>

        <Container>
          <Router>
            <Routes>
              <Route exact path="/" element={<BlogPostListContainer />} />
              <Route path="/blog/:slug" element={<BlogPostContainer />} />
              {/* <Route path="/blog/:id/:slug" element={ <BlogPost />} /> */}
              {/* <BlogPostListContainer/> */}
              {/* <BlogPostContainer /> */}
            </Routes>
          </Router>
        </Container>
      </Provider>
    </div>
  )

}

export default App;
