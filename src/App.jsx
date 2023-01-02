import React from 'react'
// import reactLogo from './assets/react.svg'
import Hero from './Sections/Hero/Hero';
import Whychooseus from './Sections/WhyChooseUs/Whychooseus';
import LatestArticles from './Sections/Latest Articles/LatestArticles';
import Footer from './Sections/Footer/Footer';

function App() {

  return (
    <div className="App">
      {/* <Hero />  */}
      <header> <Hero /> </header>
        <main> 
          <Whychooseus />
          <LatestArticles />
        </main>
      <Footer/>
    </div>
  )
}

export default App
