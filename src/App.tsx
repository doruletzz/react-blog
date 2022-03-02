import { useState } from 'react';
import BlogPostList from './components/BlogPostList';

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPostListContainer from './components/BlogPostListContainer';
import { Provider } from 'react-redux';


import store from './redux/store';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Container>
          {/* <BlogPostListContainer/> */}
          <BlogPostContainer/>
        </Container>
      </Provider>
    </div>
  )

}

export default App;
