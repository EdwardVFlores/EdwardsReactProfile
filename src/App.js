import './App.css';
import NavigationBar from './components/common/navigation-bar/navigation-bar';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Socials from './components/socials/socials';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Socials />
      <Projects />
    </div>
  );
}

export default App;