import './App.css';
import { ToggleNav } from './components/toggle-nav';
import Intro from './sections/intro';
import About from './sections/about';
import Timeline from './sections/timeline';
import Projects from './sections/projects';
import Contact from './sections/contact';

function App() {

  return (
    <main>
      <ToggleNav />
      <Intro />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  )
}

export default App;
