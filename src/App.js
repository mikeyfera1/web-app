import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Projects from './components/Projects';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Michael Fera | Software Engineer</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name='description' content="Michael Fera | Software Engineer"/>
      </Helmet>
    </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element= {<About />} />
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
