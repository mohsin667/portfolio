import './App.scss';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Employment from './components/Employment';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Intro />
      <hr />
      <Resume />
      <Employment />
      <Skills />
      <MyProjects />
      <Footer />
    </main>
  );
}

export default App;
