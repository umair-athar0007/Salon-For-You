import './App.css';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import { Signin } from './components/sign _in/sign _in/signin';
import { Signup } from './components/Signup/Signup/signup';
import { SaloonLanding } from './components/saloonPage/Saloon';
import { SaloonFooter } from './components/saloonPage/footersaloon';
import { LinearDeterminate } from './components/saloonPage/Saloon';
import { Cover } from './components/cover';
import { Home } from './home';
import { Saloon } from './components/saloons';
function App() {
  return (
    <div className="App">
<BrowserRouter>
{/* <LinearDeterminate></LinearDeterminate> */}
{/* <Cover></Cover> */}
<Routes>
  <Route path='/' element={ <Cover></Cover>} />
  <Route path='/signin' element={ <Signin></Signin>} />
  <Route path='/signup' element={ <Signup></Signup>} />
  <Route path='/saloon' element={ <Saloon></Saloon>} />
  <Route path='/saloonprofile' element={ <SaloonLanding></SaloonLanding>} />
  <Route path='/saloonlocator' element={ <SaloonFooter></SaloonFooter>} />
</Routes>

</BrowserRouter>

    
    </div>
  );
}

export default App;
