import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';
import SearchBook from './containers/SearchBook';
import LightBox from './components/Fast food/LightBox';
import GalleryReact from './components/Fast food/Gallery';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<AddBooks/>}/> 
          <Route path='/search' element={<SearchBook/>}/>
          <Route path='/food' element={<LightBox/>}/>
          <Route path='/gallery' element={<GalleryReact/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
        </Routes>
       
      
      </BrowserRouter>
      
    </div>
  );
}

export default App; 
