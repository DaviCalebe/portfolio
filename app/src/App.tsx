import './App.css';
import { ToggleNav } from './components/toggle-nav';
import Intro from './sections/intro';
import About from './sections/about';
import Timeline from './sections/timeline';
import Projects from './sections/projects';
import Contact from './sections/contact';
import { SocialMedias } from './components/social-medias';

function App() {

  return (
    <main>
      <ToggleNav />
      <SocialMedias />
      <Intro />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  )
}

export default App;
