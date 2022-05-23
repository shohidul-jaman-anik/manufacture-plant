import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Form/Login/Login';
import SignUP from './Pages/Form/SignUp/SignUP';
import WhyChooseUs from './Pages/About/WhyChooseUs/WhyChooseUs';
import Header from './Pages/Shared/Header/Header';
import Purchage from './Pages/Purchage/Purchage';
import RequireAuth from './Pages/Other/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div >
      <ScrollToTop smooth top="800" color="#E83A59" />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUP></SignUP>}></Route>
        <Route path='/purchage/:productsId' element={
          <RequireAuth>
            <Purchage></Purchage>
          </RequireAuth>}>
        </Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/whyUs' element={<WhyChooseUs></WhyChooseUs>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
