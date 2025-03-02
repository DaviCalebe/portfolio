import './App.css';
import { ToggleNav } from './components/toggle-nav';
import Intro from './sections/intro';
import About from './sections/about';
import Timeline from './sections/timeline';

function App() {

  return (
    <main>
      <ToggleNav />
      <Intro />
      <About />
      <Timeline />
    </main>
  )
}

export default App;
