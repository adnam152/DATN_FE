
function Footer() {
  return (
    <div className="footer gap-0 grid-cols-3">
      <aside className="grid gap-0 bg-white p-4 w-full h-full py-8 px-12">
        <img className="h-14" src="https://www.freestyle-dancewear.com/cdn/shop/files/Blueonwhite.png?v=1615322195&width=240" alt="" />
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <span className="italic font-medium me-2">Số nhà 35, ngách 212/14 đường Phú Mỹ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</span>
        </p>
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <span className="italic font-medium me-2">(+84) 357 420 766</span>
        </p>
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <span className="italic font-medium me-2">teddy.nam152@gmail.com</span>
        </p>
        <div className="flex mt-4 space-x-6">
          <a href="#">
            <i className="fa-brands fa-square-instagram text-3xl" style={{color: '#dc2626'
              
            }}></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-facebook text-3xl" style={{ color: '#1877F2' }}></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-threads text-3xl"></i>
          </a>
        </div>
      </aside>

      <div className="grid p-2 w-full h-full col-span-2 py-8 px-12 shadow-md rounded" style={{ background: '#EFEFEF' }}>
        <div className="flex justify-between w-full">
          <div className="pt-4">
            <p className="font-bold text-xl border-b-2 pb-2 mb-3 border-red-500 ">Mua sắm</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Quần áo</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Giày</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Phụ kiện</p>
          </div>

          <div className="pt-4">
            <p className="font-bold text-xl border-b-2 pb-2 mb-3 border-red-500 ">Khác</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Vè chúng tôi</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Chính sách bảo mật</p>
            <p className="p-1 mt-1 font-semibold text-base italic">Chính sách đổi trả</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.141320824117!2d105.79380725!3d21.001240550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1727967770357!5m2!1svi!2s" loading="lazy" className="w-96 h-64 p-4" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="grid grid-cols-2 w-full items-end">
          {/* Đăng ký mail */}
          <div>
            <p className="italic font-bold text-base mb-4">Đăng ký nhận thông tin về các khuyến mãi:</p>
            <label className="input input-bordered flex items-center gap-2 pe-0 w-full">
              <input type="text" className="grow" placeholder="Địa chỉ email của bạn" />
              <button className="btn btn-error bg-red-600 text-white">Đăng ký</button>
            </label>
          </div>
          {/* Copyright */}
          <p className="italic text-end">Copyright ©Posthemes. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer