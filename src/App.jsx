import './index.css';
import { Routes, Route } from 'react-router';
import PublicLayout from './public/PublicLayout';
// import AdminLayout from './admin/AdminLayout';
import Home from './public/pages/Home/Home';
import AllProduct from './public/pages/AllProduct/AllProduct';
import Detail from './public/pages/Detail/Detail';
import Cart from './public/pages/Cart/Cart';
import Checkout from './public/pages/Checkout/Checkout';

function App() {

  return (
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
        {/* <Route path='ca-nhan' element={<HomePage />}>
          <Route path='' element={<HomePage />} />
          <Route path='thay-doi-thong-tin' element={<HomePage />} />
        </Route> */}
      </Route>

      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
