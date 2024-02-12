import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <div className="gradient__bg-inverted">
      <Features />

      </div>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
