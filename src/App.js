import './App.css';
import Aim from './Components/Aim';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theory from './Components/Theory';
import Procedure from './Components/Procedure';
import Simulation from './Components/Simulation';
import Code from './Components/Code';
import Quiz1 from './Components/Quiz1';
import Results from './Components/Results';

function App() {
  return (
    <>
      <Router>
          <Header/>
          
            <h1 className='text-4xl text-center m-20 font-extrabold font-serif'>Breadth First Search (BFS)</h1>
          
          <Navbar/>
          <Switch>
              <Route exact path='/Aim'>
                <Aim/>
              </Route>
              <Route exact path='/Theory'>
                <Theory/>
              </Route>
              <Route exact path='/Procedure'>
                <Procedure/>
              </Route>
              <Route exact path='/Simulation'>
                <Simulation/>
              </Route>
              <Route exact path='/Code'>
                <Code/>
              </Route>
              <Route exact path='/Quiz1'>
                <Quiz1/>
              </Route>
              <Route exact path='/Results'>
                <Results/>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
