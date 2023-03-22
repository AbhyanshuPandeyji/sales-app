import './App.css';
import Navbar from './components/Navbar.js';
import AddSales from './Pages/AddSales.js';
import Login from './Pages/Login.js';
import Logout from './Pages/Logout.js'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from './Pages/Register';
import TopSales from './Pages/TopSales';
import TotalRevenue from './Pages/TotalRevenue';

function App() {
  return (
      
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<AddSales/>}/>
      <Route exact path='/AddSales' element={<AddSales/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/TopSales' element={<TopSales/>}/>
      <Route exact path='/TotalRevenue' element={<TotalRevenue/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Logout' element={<Logout/>}/>
      </Routes>
    </Router>
  
      
  );
}

export default App;
