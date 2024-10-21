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
        console.log('Show auth modal');
        setIsShowAuthModal(true);
    };
    const onCloseAuthModal = () => {
        console.log('Close auth modal');
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
            <header className="flex justify-between items-center py-4 px-10 border-b border-gray-200 shadow-md bg-white">
                {/* Logo */}
                <Link to='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_TEUcWRoHNFFfGBXAJYlu_h6vigjQPbYj3K3efkMh-jTkjAA" className="h-10" />
                </Link>


                {/* Thanh tìm kiếm */}
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/3">
                    <input
                        type="text"
                        placeholder="Tìm sản phẩm..."
                        className="outline-none text-gray-600 text-sm w-full px-2"
                    />
                    <button className="ml-2 text-gray-600">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {/* Navbar */}
                <nav className="flex items-center space-x-8">
                    <a href="/" className="text-sm text-black font-semibold relative hover:text-red-500">
                        Trang chủ
                        <span className="block w-full h-0.5 bg-red-500 rounded-full absolute -bottom-1 left-0 transition-transform transform scale-x-0 hover:scale-x-100"></span>
                    </a>
                    <a href="#" className="text-sm text-gray-600 hover:text-red-500">Quần áo</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-red-500">Giày</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-red-500">Phụ kiện</a>
                    <a href="/tin-tuc" className="text-sm text-gray-600 hover:text-red-500">Tin tức</a>
                    <a href="/ve-chung-toi" className="text-sm text-gray-600 hover:text-red-500">Về chúng tôi</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-6">
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
            </header>

            {/* Modal */}
            {isShowAuthModal && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex items-center z-40"
                    style={{ background: "#000000a6" }}
                    onClick={onCloseAuthModal}
                >
                    <AuthForm />
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
                    className="w-6 h-6 object-contain rounded-full" alt=""
                />
            </div>
            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {authUser.role === 1 && (
                    <li>
                        <Link to={'/ca-nhan'}>Trang quản lý</Link>
                    </li>
                )}
                <li>
                    <Link to={'/'}>Cá nhân</Link>
                </li>
                <hr />
                <li onClick={onLogout}><p>Đăng xuất</p></li>
            </ul>
        </button>
    )
}


export default Header;