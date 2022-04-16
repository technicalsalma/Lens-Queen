
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';

import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home.css/Home';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
