
import './App.css';
import Header from './pages/Header/Header.js';
import Home from './pages/Home/Home.js';
import Project from './pages/Project/Project.js';
import Blog from './pages/Blog/Blog.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Footer from './pages/Footer/Footer.js';
import { BrowserRouter ,
  Routes,
  Route,} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="REACTPORTFOLIO/" element={<Home/>}/>
        <Route path='REACTPORTFOLIO/project' element={<Project/>}/>
        <Route path='REACTPORTFOLIO/blog' element={<Blog/>}/>
        <Route path='REACTPORTFOLIO/about' element={<About/>}/>
        <Route path='REACTPORTFOLIO/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}


export default App;
