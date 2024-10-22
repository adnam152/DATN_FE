/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuthStore from "../../../store/useAuthStore";
import AuthForm from "../AuthForm/AuthForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { logout } from "../../../services/authService";
import useLoaderStore from "../../../store/useLoaderStore";

function Header() {
    const authUser = useAuthStore(state => state.authUser);
    const setAuthUser = useAuthStore(state => state.setAuthUser);
    const [isShowAuthModal, setIsShowAuthModal] = useState(false);
    const setLoading = useLoaderStore(state => state.setLoading);

    const onShowAuthModal = () => {
        setIsShowAuthModal(true);
    };
    const onCloseAuthModal = () => {
        setIsShowAuthModal(false);
    }
    const onLogout = async () => {
        setLoading(true);
        try {
            const res = await logout();
            if (res?.message) {
                setAuthUser(null);
                toast.success(res.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Sau khi đăng nhập, đóng modal
    useEffect(() => {
        if (authUser) setIsShowAuthModal(false);
    }, [authUser])

    return (
        <>
            <div className="navbar bg-base-100 px-10 border-b">
                <div className="navbar-start">
                    <Link to='/'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_TEUcWRoHNFFfGBXAJYlu_h6vigjQPbYj3K3efkMh-jTkjAA" className="h-10" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex space-x-6">
                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-96">
                        <input
                            type="text"
                            placeholder="Tìm sản phẩm..."
                            className="outline-none text-gray-600 text-sm w-full px-2"
                        />
                        <button className="ml-2 text-gray-600">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <ul className="menu menu-horizontal px-1">
                        <li className="dropdown dropdown-hover">
                            <div tabIndex={0} className="btn-animation">Mua sắm <i className="fa-solid fa-angle-down"></i></div>
                            <ul className="dropdown-content menu bg-base-100 rounded z-[1] w-max p-0 ms-0 shadow hover:bg-white">
                                <div className="flex py-2">
                                    <div className="px-2">
                                        <h2 className="font-semibold text-base ps-3 font-tuffy">Danh mục</h2>
                                        <ul tabIndex={0} className="menu bg-base-100 w-52 before:w-0">
                                            <li><Link to="/san-pham?a=1" className="btn-animation">Quần áo</Link></li>
                                            <li><Link to="/san-pham?a=2" className="btn-animation">Quần áo</Link></li>
                                            <li><Link to="/san-pham?a=3" className="btn-animation">Quần áo</Link></li>
                                            <li><Link to="/san-pham" className="btn-animation">Quần áo</Link></li>
                                        </ul>
                                    </div>
                                    <div className="px-2 border-l-2">
                                        <h2 className="font-semibold text-base ps-3 font-tuffy">Tags</h2>
                                        <ul tabIndex={0} className="menu bg-base-100 w-52 before:w-0">
                                            <li><Link to="/san-pham" className="btn-animation">Quần áo</Link></li>
                                            <li><Link to="/san-pham" className="btn-animation">Quần áo</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li>
                            <Link to="/tin-tuc" className="btn-animation">Blog</Link>
                        </li>
                        <li>
                            <Link to="/chinh-sach" className="btn-animation">Chính sách</Link>
                        </li>
                        <li>
                            <Link to="/ve-chung-toi" className="btn-animation">Về chúng tôi</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-6">
                    {/* Wishlist */}
                    <Link to='/yeu-thich' className="relative cursor-pointer hover:text-blue-500">
                        <i className="fas fa-heart text-xl"></i>
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1 " >
                            0
                        </span>
                    </Link>
                    {/* Cart */}
                    <Link to='/gio-hang' className="relative cursor-pointer hover:text-blue-500">
                        <i className="fas fa-shopping-cart text-xl"></i>
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </Link>
                    {/* Profile */}
                    {authUser ? <ProfileBtn onLogout={onLogout} authUser={authUser} /> : <LoginBtn onShowAuthModal={onShowAuthModal} />}
                </div>
            </div>

            {/* Modal */}
            {isShowAuthModal && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex items-center z-40"
                    style={{ background: "#000000a6" }}
                    onClick={onCloseAuthModal}
                >
                    <AuthForm onCloseAuthModal={onCloseAuthModal} />
                </div>)}
        </>
    );
}

function LoginBtn({ onShowAuthModal }) {

    return (
        <button className="cursor- hover:text-blue-500" onClick={onShowAuthModal}>
            <i className="fas fa-user text-xl"></i>
        </button>
    )
}
function ProfileBtn({ onLogout, authUser }) {
    return (
        <button className="dropdown dropdown-end">
            <div tabIndex="0" role="button">
                <img
                    src={authUser.avatar}
                    className="w-7 h-7 object-contain rounded-full" alt=""
                />
            </div>
            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {authUser.role === 1 && (
                    <li>
                        <Link to={'/ca-nhan'}>Trang quản lý</Link>
                    </li>
                )}
                <li>
                    <Link to={'/ca-nhan'}>Cá nhân</Link>
                </li>
                <hr />
                <li onClick={onLogout}><p>Đăng xuất</p></li>
            </ul>
        </button>
    )
}


export default Header;