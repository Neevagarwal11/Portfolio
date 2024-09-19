  import React, { useEffect, useRef } from 'react'
  import LandingPage from './pages/landingpage'
  import Page2 from './pages/page2'
  import { BrowserRouter , Routes , Route } from 'react-router-dom';
  import Projects from './pages/projects'
  import Explore from './pages/explore'
  import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

  function App() {
      

    return (
      
      <div className='w-full h-screen'>
        <BrowserRouter>
        <ScrollToTop/>
        <Routes>

        <Route index element={<LandingPage/>}/>
        <Route path="home" element={<LandingPage/>}/>

        <Route path="works" element={<Projects></Projects>}/>
        <Route path ="explore" element={<Explore></Explore>}/>
        </Routes>
        </BrowserRouter>
      </div>

    )
  }


  export default App