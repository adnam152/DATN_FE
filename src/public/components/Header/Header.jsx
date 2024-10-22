/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuthStore from "../../../store/useAuthStore";
import AuthForm from "../AuthForm/AuthForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { logout } from "../../../services/authService";
import useLoaderStore from "../../../store/useLoaderStore";
import useWishlistStore from "../../../store/useWishlistStore";

function Header() {
    const authUser = useAuthStore(state => state.authUser);
    const setAuthUser = useAuthStore(state => state.setAuthUser);
    const [isShowAuthModal, setIsShowAuthModal] = useState(false);
    const setLoading = useLoaderStore(state => state.setLoading);
    const countWishlist = useWishlistStore(state => state.wishlist.length);

    const catalogues = [
        { name: 'Quần áo', slug: 'quan-ao' },
        { name: 'Giày dép', slug: 'giay-dep' },
        { name: 'Túi xách', slug: 'tui-xach' },
        { name: 'Phụ kiện', slug: 'phu-kien' },
    ];
    const brands = [
        { name: 'Nike', slug: 'nike' },
        { name: 'Adidas', slug: 'adidas' },
        { name: 'Puma', slug: 'puma' },
        { name: 'Converse', slug: 'converse' },
        { name: 'New Balance', slug: 'new-balance' },
        { name: 'Jordan', slug : 'jordan' },
    ]

    // Event handler
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

    // Effect
    useEffect(() => {
        if (authUser) setIsShowAuthModal(false);
    }, [authUser]);

    return (
        <>
            <div className="navbar bg-base-100 px-10 border-b">
                <div className="navbar-start">
                    <Link to='/'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_TEUcWRoHNFFfGBXAJYlu_h6vigjQPbYj3K3efkMh-jTkjAA" className="h-10" />
                    </Link>
                </div>
                <div className="navbar-center lg:flex space-x-6">
                    <Menu catalogues={catalogues} brands={brands} />
                </div>
                <div className="navbar-end space-x-6">
                    {/* Wishlist */}
                    <Link to='/yeu-thich' className="relative cursor-pointer hover:text-blue-500">
                        <i className="fas fa-heart text-xl"></i>
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1 " >
                            {countWishlist}
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

function Menu({ catalogues, brands }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
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
            <div className="px-1 flex gap-3">
                <div className="dropdown" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <Link to='/san-pham'>
                        <div tabIndex={0} role="button" className="btn-animation rounded-xl text-sm px-3 py-2 hover:bg-gray-200">
                            Mua sắm <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </Link>
                    <div className={`absolute bg-base-100 rounded z-[1] w-max p-0 ms-0 shadow hover:bg-white ${isHover ? '' : 'hidden'}`}>
                        <div className="flex py-2">
                            <div className="px-2">
                                <h2 className="font-semibold text-base ps-3 font-tuffy">Danh mục</h2>
                                <ul tabIndex={0} className="menu bg-base-100 w-52 before:w-0">
                                    {catalogues.map((catalogue, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/san-pham?danh-muc[]=${catalogue.slug}`} className="btn-animation">{catalogue.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="px-2 border-l-2">
                                <h2 className="font-semibold text-base ps-3 font-tuffy">Thương hiệu</h2>
                                <ul tabIndex={0} className="menu bg-base-100 w-52 before:w-0">
                                    {brands.map((brand, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/san-pham?brands[]=${brand.slug}`} className="btn-animation">{brand.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="rounded-xl text-sm px-3 py-2 btn-animation hover:bg-gray-200" to="/tin-tuc">Blog</Link>
                <Link className="rounded-xl text-sm px-3 py-2 btn-animation hover:bg-gray-200" to="/chinh-sach">Chính sách</Link>
                <Link className="rounded-xl text-sm px-3 py-2 btn-animation hover:bg-gray-200" to="/ve-chung-toi">Về chúng tôi</Link>
            </div>
        </>
    )
}


export default Header;