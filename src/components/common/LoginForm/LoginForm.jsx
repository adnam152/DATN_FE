import React from 'react';
import "./LoginForm.css"

function LoginForm() {
  return (
    <div className="flex mx-auto w-[935px] h-[685px] bg-[#E3EBF6] rounded-[26px] overflow-hidden shadow-md">
      <div className="flex-1 max-w-[400px]  pl-[100px] flex flex-col justify-center">
        <h2 className="text-4xl text-[#363377] font-bold mb-1">Đăng Nhập</h2>
        <p className="text-[#363377] mb-5">Nếu bạn đã là thành viên</p>
        <form className="flex flex-col item-conten">
          <div className="relative">
            <input type="text" placeholder="Email, SĐT" className="w-full mb-6 p-3 border border-gray-700 rounded-lg text-sm bg-white" />
          </div>
          <div className="relative">
            <input type="text" placeholder="Mật khẩu" className="w-full mb-6 p-3 border border-gray-700 rounded-lg text-sm bg-white" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                 <i className="fa-solid fa-eye-slash text-gray-400 mb-8"></i>
              </span>
          </div>
          <div className="relative bg-[#445279] text-white max-w-[300px] p-3 rounded-lg cursor-pointer text-base mb-6">
            <button className="w-full text-center" type="submit" >Đăng nhập</button>
          </div>
          <div className="bg-white text-gray-800 p-3 max-w-[300px] border border-gray-300 rounded-lg cursor-pointer text-base flex items-center justify-center mb-6">
            <img src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" alt="Google" className="mr-2 w-5 h-5" />
            Continue with Google
          </div>

          <Link href="#" className="text-[#363377] py-6">Quên mật khẩu?</Link>
        </form>
        <hr className="border-t border-gray-400 my-6" />
        <div className="flex justify-between items-center">
          <Link href="#" className="text-[#363377]">Chưa có tài khoản?</Link>
          <button className="bg-white text-black text-sm py-2 px-5 rounded-lg">
            <Link href='#'>Đăng ký</Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <img src="https://uploads.nguoidothi.net.vn/content/c18436a3-beb0-4f87-ac5b-4bc593780d9a.jpg" alt="Colorful shoe" className="img-custom w-[85%] h-[80%] rounded-[22px] object-cover" />
      </div>
    </div>
  );
}

export default LoginForm;