import React from 'react'
import './index.css';
import './mediaquery.css';
import HeaderList from './components/HeaderList'
import MenuList from './components/MenuList'
import Home from './pages/Home';
// import Cart from './components/Cart'
import CleanserCard from './pages/Face/CleanserCard'
import TonerCard from './pages/Face/TonerCard'
import FaceOilCard from './pages/Face/FaceOilCard'
import FaceSerumCard from './pages/Face/FaceSerumCard'
import BlemishesCard from './pages/Face/BlemishesCard'
import LipNeckCareCard from './pages/Face/LipNeckCareCard'
import TestCard from './pages/Face/TestCard'
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min';
import Sunscreen from './pages/Sunscreen';
import Perfume from './pages/Perfume';
import Men from './pages/Men';
import Face from './pages/Face/Face';
import Moisturizer from './pages/Face/Moisturizer';
import Map from './components/Footer';
import Body from './pages/Body';
import Eyes from './pages/Make up/Eye';
import Lips from './pages/Make up/Lips';
import MFace from './pages/Make up/MFace';
import Gallery from './pages/Gallery';
import OurStore from './components/OurStore';
import Photo from './pages/Photos';



function App () {
  return (
    <div className='view' >
      
      <HeaderList />
      <MenuList />
      {/* <Gallery/> */}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/body' element={<Body></Body>}></Route>
        <Route path='/map' element={<Map></Map>}></Route>
        <Route path='/gallery' element={<Photo></Photo>}></Route>
        <Route path='/ourproducts' element={<OurStore></OurStore>}></Route>

        <Route path='/BlemishesCard' element={<BlemishesCard></BlemishesCard>}></Route>
        <Route path='/CleanserCard' element={<CleanserCard></CleanserCard>}></Route>
        <Route path='/FaceOilCard' element={<FaceOilCard></FaceOilCard>}></Route>
        <Route path='/Face' element={<Face></Face>}></Route>
        <Route path='/FaceSerumCard' element={<FaceSerumCard></FaceSerumCard>}></Route>
        <Route path='/LipNeckCareCard' element={<LipNeckCareCard></LipNeckCareCard>}></Route>
        <Route path='/Moisturizer' element={<Moisturizer></Moisturizer>}></Route>
        <Route path='/Tonercard' element={<TonerCard></TonerCard>}></Route>

        <Route path='/sunscreen' element={<Sunscreen></Sunscreen>}></Route>
        <Route path='/eyes' element={<Eyes></Eyes>}></Route>
        <Route path='/mface' element={<MFace></MFace>}></Route>
        <Route path='/lips' element={<Lips></Lips>}></Route>
        <Route path='/perfume' element={<Perfume></Perfume>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
      </Routes> 
      {/* <Map/> */}
    </div>
  )
}

export default App
