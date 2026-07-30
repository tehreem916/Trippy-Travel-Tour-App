
import './App.css'
import {Route,Routes } from 'react-router-dom';
import Home from './routes/home.jsx';
import About from './routes/about.jsx';
import Service from './routes/service.jsx';
import Contact from './routes/contact.jsx';
import SignUp from './routes/SignUp.jsx';


function App() {


  return (
    <>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App
