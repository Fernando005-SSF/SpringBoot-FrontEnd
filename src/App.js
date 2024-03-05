
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';


function App() {
  return (
    <div>

      <Router>
      <Navbar/>

      <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/AddUser' element={<AddUser/>}/>
            <Route exact path='/EditUser:id' element={<EditUser/>}/>
            
      </Routes>

      </Router>
  
    </div>
  );
}

export default App;
