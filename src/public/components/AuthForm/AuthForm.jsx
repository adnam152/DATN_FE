import { Link } from "react-router-dom";
import "./AuthForm.css"


function LoginForm() {
  return (
    <div className="flex mx-auto w-[935px] h-[685px] bg-[#E3EBF6] rounded-[26px] overflow-hidden shadow-md">
      <div className="flex-1 max-w-[400px]  pl-[100px] flex flex-col justify-center">
        <h2 className="text-4xl text-[#363377] font-bold">Login</h2>
        <p className="text-[#363377] my-3 text-sm">Nếu bạn đã là thành viên, hãy đăng nhập</p>

        <form className="flex flex-col">
          <div className="relative">
            <input type="text" placeholder="Số điện thoại" className="w-full my-4 px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white" />
          </div>
          <div className="relative">
            <input type="text" placeholder="Mật khẩu" className="w-full my-4 px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <i className="fa-regular fa-eye-slash"></i>
            </span>
          </div>
          <div className="relative bg-[#445279] text-white max-w-[300px] p-2 rounded-lg cursor-pointer text-base my-4">
            <button className="w-full text-center" type="submit" >Đăng nhập</button>
          </div>
          <div className="bg-white text-gray-800 p-2 max-w-[300px] border border-gray-300 rounded-lg cursor-pointer text-base flex items-center justify-center my-4">
            <img src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" alt="Google" className="mr-2 w-5 h-5" />
            Đăng nhập với Google
          </div>
          <Link to="quen-mat-khau" className="text-[#363377] text-sm py-6">Quên mật khẩu?</Link>
        </form>

        <hr className="border-t border-gray-400 my-6" />
        <div className="flex items-center">
          <p className="text-[#363377] text-sm">Nếu chưa có tài khoản? Tạo mới</p>
          <button className="bg-white text-[#363377] text-sm py-1 px-2 ms-1 rounded-lg">
            Đăng ký
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dzkdgm4c7/image/upload/v1690888778/Workshop1/n2r71bndgsrttfgzmo6z.webp" alt="Colorful shoe" className="authform-img-shadow w-[85%] h-[80%] rounded-[22px] object-cover" />
      </div>
    </div>
  );
}

export default LoginForm;