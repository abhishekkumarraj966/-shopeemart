import './App.css';
import Customberp from './Components/Customberp';
import Feedback from './Components/Feedback';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
// import Recentblg from './Components/Recentblg';
import Shopymart from './Components/Shopymart';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Customberp/>
     <Shopymart/>
     {/* <Recentblg/> */}
     <Feedback/>
    </div>
  );
}

export default App;
