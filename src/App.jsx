import React from 'react'
// import reactLogo from './assets/react.svg'
import Hero from './Sections/Hero/Hero';
import Whychooseus from './Sections/WhyChooseUs/Whychooseus';
import LatestArticles from './Sections/Latest Articles/LatestArticles';
import Footer from './Sections/Footer/Footer';

function App() {

  return (
    <div className="App">
        <Hero />
      <Whychooseus/>
      <LatestArticles />
      <Footer/>
    </div>
  )
}

export default App
