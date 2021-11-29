import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Register from './pages/Register';
import PostPage from './pages/PostPage';
import ForumPage from './pages/PostPage';
import ForumsListPage from './pages/ForumsListPage';
import AddPostPage from './pages/AddPostPage';
import './index.css';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/posts">
              <Route index element={<Home />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/forums">
              <Route index element={<ForumsListPage />} />
              <Route path=":id" element={<ForumPage />} />
            </Route>
            <Route path="saved" element={<Saved />} />
            <Route path="/add-post" element={<AddPostPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
