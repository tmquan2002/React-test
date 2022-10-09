import './App.css';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Main from './components/Main'
import Contact from './components/Contact';
import News from './components/News'
import NoPage from './components/NoPage';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact strict path='/' element={<Main />}></Route>
        <Route exact strict path='news' element={<News />}></Route>
        <Route exact strict path='about' element={<About />}></Route>
        <Route exact strict path='detail/:id' element={<Detail />}></Route>
        <Route exact strict path='contact' element={<Contact />}></Route>
        <Route exact strict path='*' element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
