function Whishlist() {
    return (
        <div className="whishlist flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 m-5 w-full max-w-7xl" style={{ boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)' }}>
                <h1 className="text-2xl font-bold mb-4 px-12">
                    Sản Phẩm Yêu Thích
                </h1>
                <div className="px-12">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="pb-0 border-b-2 border-gray-300">Sản phẩm</th>
                                <th className="pb-0 border-b-2 border-gray-300">Giá</th>
                                <th className="pb-0 border-b-2 border-gray-300">Tình trạng</th>
                                <th className="pb-0 border-b-2 border-gray-300"></th>
                                <th className="pb-0 border-b-2 border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="product">
                                <td className="py-4 flex items-center font-semibold">
                                    <img alt="Taxmax Leather Bag" className="w-16 h-16 mr-4 rounded-md" height="60" src="public/wishlist.jpg" width="60" />
                                    Taxmax Leather Bag
                                </td>
                                <td className="py-4 font-semibold">900.000đ</td>
                                <td className="py-4 font-semibold">Còn hàng</td>
                                <td className="py-4 font-semibold ">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                        <i className="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                                    </button>
                                </td>
                                <td className="py-4">
                                    <button className="text-red-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr className="product border-t">
                                <td className="py-4 flex items-center font-semibold">
                                    <img alt="Taxmax Leather Bag" className="w-16 h-16 mr-4 rounded-md" height="60" src="public/wishlist.jpg" width="60" />
                                    Taxmax Leather Bag
                                </td>
                                <td className="py-4 font-semibold">900.000đ</td>
                                <td className="py-4 font-semibold">Còn hàng</td>
                                <td className="py-4 font-semibold ">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                        <i className="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                                    </button>
                                </td>
                                <td className="py-4">
                                    <button className="text-red-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr className="product border-t">
                                <td className="py-4 flex items-center font-semibold">
                                    <img alt="Taxmax Leather Bag" className="w-16 h-16 mr-4 rounded-md" height="60" src="public/wishlist.jpg" width="60" />
                                    Taxmax Leather Bag
                                </td>
                                <td className="py-4 font-semibold">900.000đ</td>
                                <td className="py-4 font-semibold">Còn hàng</td>
                                <td className="py-4 font-semibold ">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                        <i className="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                                    </button>
                                </td>
                                <td className="py-4">
                                    <button className="text-red-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr className="product border-t">
                                <td className="py-4 flex items-center font-semibold">
                                    <img alt="Taxmax Leather Bag" className="w-16 h-16 mr-4 rounded-md" height="60" src="public/wishlist.jpg" width="60" />
                                    Taxmax Leather Bag
                                </td>
                                <td className="py-4 font-semibold">900.000đ</td>
                                <td className="py-4 font-semibold">Còn hàng</td>
                                <td className="py-4 font-semibold ">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                        <i className="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                                    </button>
                                </td>
                                <td className="py-4">
                                    <button className="text-red-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr className="product border-t"></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}
export default Whishlist