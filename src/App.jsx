import './index.css';
import { Routes, Route } from 'react-router';
import PublicLayout from './public/PublicLayout';
// import AdminLayout from './admin/AdminLayout';
import Home from './public/pages/Home/Home';
import AllProduct from './public/pages/AllProduct/AllProduct';
import Detail from './public/pages/Detail/Detail';
import Cart from './public/pages/Cart/Cart';
import Checkout from './public/pages/Checkout/Checkout';
import BlogPage from './public/pages/BlogPage/Blogpage';
import { useEffect } from 'react';
import useAuthStore from './store/authStore';
import authService from './services/authService';
import AboutPage from './public/pages/AboutPage/Aboutpage';
import useAuthStore from './store/useAuthStore';
import { checkLogin } from './services/authService';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import useLoaderStore from './store/useLoaderStore';
import Whishlist from './public/pages/Whishlist/Whishlist';
import Policy from './public/pages/Policy/Policy';

function App() {
  const setAuthUser = useAuthStore(state => state.setAuthUser);
  const isLoading = useLoaderStore(state => state.isLoading);
  const setLoading = useLoaderStore(state => state.setLoading);

  // config axios
  axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
  axios.defaults.withCredentials = true;

  // Check login when app start
  useEffect(() => {
    async function check() {
      setLoading(true);
      try {
        const res = await checkLogin();
        setAuthUser(res.data);
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    check();
  }, []);

  return (
    <>
      <Routes>
        {/* Giao diện quản trị viên */}
        {/* <Route path='admin' element={<AdminLayout />}>
        <Route path='thong-ke' element={<h1>Thống kê</h1>} />

        <Route path='danh-muc'>
          <Route path='' element={<h1>Danh mục</h1>} />
          <Route path='them' element={<h1>Thêm danh mục</h1>} />
          <Route path='sua/:id' element={<h1>Sửa danh mục</h1>} />
        </Route>


        <Route path='san-pham'>
          <Route path='' element={<h1>Sản phẩm</h1>} />
          <Route path='them' element={<h1>Thêm sản phẩm</h1>} />
          <Route path='sua/:id' element={<h1>Sửa sản phẩm</h1>} />
        </Route>

        <Route path='don-hang'>
          <Route path='' element={<h1>Đơn hàng</h1>} />
          <Route path='chi-tiet/:id' element={<h1>Chi tiết đơn hàng</h1>} />
        </Route>

        <Route path='tai-khoan'>
          <Route path='' element={<h1>Tài khoản</h1>} />
          <Route path='them' element={<h1>Thêm tài khoản</h1>} />
          <Route path='sua/:id' element={<h1>Sửa tài khoản</h1>} />
        </Route>
      </Route> */}
      {/* Giao diện người dùng */}
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='danh-muc/:slug' element={<AllProduct />} />
        <Route path='san-pham/:slug' element={<Detail />} />
        <Route path='gio-hang' element={<Cart />} />
        <Route path='thanh-toan' element={<Checkout />} />
        <Route path='tin-tuc'>
          <Route index element={<BlogPage />} />
          <Route path=':slug' element={<AboutPage />} />
        </Route>
        <Route path='yeu-thich' element={<BlogPage />} />
        <Route path='ca-nhan'>
        {/* Giao diện người dùng */}
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='san-pham'>
            <Route index element={<AllProduct />}></Route>
            <Route path=':slug' element={<Detail />} />
          </Route>
          <Route path='gio-hang' element={<Cart />} />
          <Route path='thanh-toan' element={<Checkout />} />
          <Route path='tin-tuc'>
            <Route index element={<BlogPage />} />
            <Route path=':slug' element={<BlogPage />} />
          </Route>
          <Route path='yeu-thich' element={<Whishlist />} />
          <Route path='chinh-sach' element={<Policy />} />
          <Route path='ca-nhan'>
            <Route index element={<Home />} />
            <Route path='thay-doi-thong-tin' element={<Home />} />
          </Route>
        </Route>

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      {isLoading && (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <PulseLoader color="#00f6a2" margin={5} />
        </div>
      )}
    </>
  )
}

export default App
