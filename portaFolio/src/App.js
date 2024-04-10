import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills} from './components/Skills';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills/>
    </div>
  );
}

export default App;
