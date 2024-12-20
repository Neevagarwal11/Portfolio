  import React, { useEffect, useRef } from 'react'
  import LandingPage from './pages/landingpage'
  import Page2 from './pages/page2'
  import { BrowserRouter , Routes , Route } from 'react-router-dom';
  import Projects from './pages/projects'
  import Explore from './pages/explore'
  import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
  import { Helmet } from 'react-helmet';
  import img from './assets/personal.jpg'
  import Logo from './assets/output-onlinepngtools (1).png'

  function App() {
      

    return (
      
      <div className='main w-full h-screen  4xl:overflow-x-hidden'>
        <BrowserRouter>
        <ScrollToTop/>
        <Routes>

        <Route index element={<LandingPage/>}/>
        <Route path="home" element={<LandingPage/>}/>

        <Route path="works" element={<Projects></Projects>}/>
        <Route path ="explore" element={<Explore></Explore>}/>
        </Routes>
        </BrowserRouter>
        <Helmet>
          <title>Neev's Portfolio</title>
          <meta name="description" content="This is creative way of knowning Neev Agarwal." />
          <link rel="icon" href={Logo} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
      </div>

    )
  }


  export default App