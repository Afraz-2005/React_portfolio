import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Navbar from './components/layout/Navbar';
import Footer from './pages/Footer';
import Error from './components/layout/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/skills" component={Skills}/>
        <Route component={Error}/>
       </Switch>
      <Footer/>
    </div> 
  </BrowserRouter>
  );
}

export default App;
