import React from 'react'
import Home from './components/fontend/Home'
import About from './components/fontend/About'
import Page from './components/fontend/Page'
import Blog from './components/fontend/Blog'
import Header from './components/html5/Header'
import Footer from './components/html5/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


class App extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </>
    )
  }
}

export default App
