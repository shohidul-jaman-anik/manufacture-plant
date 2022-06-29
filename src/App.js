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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Pages/Other/RequireAdmin/RequireAdmin';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddReview from './Pages/Review/AddReview/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';


function App() {
  return (
    <div >

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
        <Route path='/addReview' element={
          <AddReview></AddReview>
        }>
        </Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addProducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          
        </Route>

        <Route path='/myOrder' element={<MyOrders></MyOrders>}></Route>
        <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/whyUs' element={<WhyChooseUs></WhyChooseUs>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

      <ScrollToTop smooth top="800" color="#E83A59" component={<p style={{ color: "#1B98F5", marginLeft: "6px", marginTop: "6px" }}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
        </svg>
      </p>} />
    </div>
  );
}

export default App;
