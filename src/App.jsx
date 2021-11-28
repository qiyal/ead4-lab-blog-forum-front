import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Login from './pages/Login';
import PostPage from './pages/PostPage';
import ForumsPage from './pages/ForumsPage';
import './index.css';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="posts/:postId" element={<PostPage />} />
            <Route path="forums" element={<ForumsPage />} />
            <Route path="saved" element={<Saved />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
