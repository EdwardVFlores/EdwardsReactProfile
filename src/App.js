import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Socials from './components/socials/socials';

function App() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <Projects />
    </div>
  );
}

export default App;