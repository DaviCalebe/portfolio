import './App.css';
import { ToggleNav } from './components/toggle-nav';
import { SocialMedias } from './components/social-medias';
import Intro from './sections/intro';
import About from './sections/about';
import Timeline from './sections/timeline';
import Projects from './sections/projects';
import Contact from './sections/contact';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <main>
      <ToggleNav />
      <SocialMedias />
      <Intro />
      <About t={t} />
      <Timeline t={t} />
      <Projects t={t} />
      <Contact t={t} />
    </main>
  );
}

export default App;
