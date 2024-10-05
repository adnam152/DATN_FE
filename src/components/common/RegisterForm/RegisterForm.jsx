import React from 'react';
import "./RegisterForm.css"

function RegisterForm() {
    return (
        <div className="flex mx-auto w-[935px] h-[685px] bg-[#E3EBF6] rounded-[26px] overflow-hidden shadow-md">
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <img src="https://uploads.nguoidothi.net.vn/content/c18436a3-beb0-4f87-ac5b-4bc593780d9a.jpg" alt="Colorful shoe" className="img-custom  w-[85%] h-[80%] rounded-[22px] object-cover " />
            </div>
            <div className="flex-1 max-w-[400px] pr-[100px] flex flex-col justify-center">
                <h2 className="text-4xl text-[#363377] font-bold mb-1">Đăng ký</h2>
                <p className="text-[#363377] mb-5">Đăng ký và nhận ưu đãi hấp dẫn</p>
                <form className="flex flex-col item-content">
                    <div className="relative">
                        <input type="text" placeholder="Tên người dùng" className="w-full mb-6 p-3 border border-gray-700 rounded-lg text-sm bg-white" />
                    </div>

                    <div className="relative">
                        <input type="password" placeholder="Mật khẩu" className="w-full mb-6 p-3 border border-gray-700 rounded-lg text-sm bg-white" />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <i className="fa-solid fa-eye-slash text-gray-400 mb-8"></i>
                        </span>
                    </div>
                    <div className="relative">
                        <input type="password"  placeholder="Xác nhận mật khẩu" className="w-full mb-6 p-3 border border-gray-700 rounded-lg text-sm bg-white" />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <i className="fa-solid fa-eye-slash text-gray-400 mb-8"></i>
                        </span>
                    </div>

                    <div className="bg-[#445279] text-white max-w-[300px] p-3 rounded-lg cursor-pointer text-base mb-6">
                        <button className="w-full text-center" type="submit" >Đăng ký</button>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 text-[#363377] ">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản và Điều kiện.
                    </p>
                </form>
                <hr className="border-t border-gray-400 my-6" />
                <div className="flex justify-between items-center">
                    <span className=" text-[#363377]">Bạn đã có tài khoản?</span>
                    <button className="bg-white text-[#363377] text-sm py-2 px-5 rounded-lg ">
                        <a href='#'>Đăng nhập</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;