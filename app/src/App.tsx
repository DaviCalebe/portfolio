import './App.css';
import { ToggleNav } from './components/toggle-nav';
import Intro from './sections/intro';
import About from './sections/about/about';

function App() {

  return (
    <main>
      <ToggleNav />
      <Intro />
      <About />
    </main>
  )
}

export default App;
