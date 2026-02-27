import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BlogPage from './pages/BlogPage/BlogPage';
import PostPage from './pages/PostPage/PostPage';
import NotFound from './pages/NotFound/NotFound';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

