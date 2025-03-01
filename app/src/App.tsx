import './App.css';
import { ToggleNav } from './components/toggle-nav';
import Intro from './sections/intro/intro';
import About from './sections/about/about';

function App() {

  return (
    <main>
      <ToggleNav />
      <Intro />
      <About />

      <section className="bg-primary flex items-center justify-center h-screen text-2xl font-bold">
        <h1>A estrada até aqui...</h1>
      </section>

    </main>
  )
}

export default App;
