import { Link } from "react-router-dom";

function Header() {
    return (
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

            {/* Thanh */}
            <nav className="flex items-center space-x-8">
                <a href="#" className="text-sm text-black font-semibold relative hover:text-red-500">
                    Trang chủ
                    <span className="block w-full h-0.5 bg-red-500 rounded-full absolute -bottom-1 left-0 transition-transform transform scale-x-0 hover:scale-x-100"></span>
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">Quần áo</a>
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">Giày</a>
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">Phụ kiện</a>
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">Tin tức</a>
                <a href="#" className="text-sm text-gray-600 hover:text-red-500">Về chúng tôi</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
                {/* Wishlist */}
                <div className="relative cursor-pointer hover:text-blue-500">
                    <i className="fas fa-heart text-xl"></i>
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1 " >
                        0
                    </span>
                </div>
                {/* Cart */}
                <Link to='/gio-hang' className="relative cursor-pointer hover:text-blue-500">
                    <i className="fas fa-shopping-cart text-xl"></i>
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                        2
                    </span>
                </Link>
                {/* Profile */}
                <div className="cursor- hover:text-blue-500">
                    <i className="fas fa-user text-xl"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;