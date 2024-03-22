import './App.css';
import Aim from './Components/Aim';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Theory from './Components/Theory';
import Procedure from './Components/Procedure';
import Simulation from './Components/Simulation';
import Code from './Components/Code';
import Quiz1 from './Components/Quiz1';
import Results from './Components/Results';
import References from './Components/References';
import Team from './Components/Team';

function App() {
  return (
    <>
      <Router>
        <Header />
        <h1 className=' text-2xl md:text-4xl text-center m-10 md:m-20 font-extrabold font-sans'>VLAB TITLE</h1>
        <Navbar />
        {/* Use Routes component to wrap Route components */}
        <Routes>
          <Route path='/Aim' element={<Aim />}/>
          <Route path='/Theory' element={<Theory />} />
          <Route path='/Procedure' element={<Procedure />} />
          <Route path='/Simulation' element={<Simulation />} />
          <Route path='/Code' element={<Code />} />
          <Route path='/Quiz1' element={<Quiz1 />} />
          <Route path='/Results' element={<Results/>} />
          <Route path='/References' element={<References/>} />
          <Route path='/Team' element={<Team/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
