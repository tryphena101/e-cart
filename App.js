import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import NavTest from './NavTest';
import RouteSwitch from './RouteSwitch';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';

function App() {
  return (
    <div>
    <Router>
    <RouteSwitch />
    <Header />
    </Router>

    </div>
  );
}


export default App;
