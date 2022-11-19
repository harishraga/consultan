import {Route,Routes} from 'react-router-dom';
import Home from './Home';


import Order from './order';
import Cheif from './Cheif';
import Menu from './Menu';
import Login from './Login';
import Table from './table';
import Main from './main';

function App() {
  return (
<>

<Routes>

<Route path='/home' element={<Home/>}/>

<Route path='/Order' element={<Order/>}/>

<Route path='/Cheif' element={<Cheif/>}/>

<Route path='/login' element={<Login/>}/>
<Route path='/table' element={<Table/>}/>

<Route path='/main' element={<Main/>}/>




<Route path='/menu' element={<Menu/>}/>
<Route path='/main' element={<Main/>}/>



</Routes>
</>    
  );
}

export default App;
