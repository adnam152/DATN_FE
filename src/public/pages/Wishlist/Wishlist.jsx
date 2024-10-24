/* eslint-disable no-undef */
import useWishlistStore from "../../../store/useWishlistStore"
import { Link } from "react-router-dom"

function Wishlist() {
    const wishlist = useWishlistStore(state => state.wishlist);
    const removeFromWishlist = useWishlistStore(state => state.removeFromWishlist);

    // Event handler
    const onRemoveFromWishlist = (productId) => {
        if (confirmDelete(() => removeFromWishlist(productId))) {
            removeFromWishlist(productId);
        }
    }

    return (
        <div className="bg-blue-50 p-12">
            <div className="container p-5 rounded mx-auto bg-white" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.15)" }}>
                <h1 className="text-2xl font-bold mb-4 px-12">
                    Sản Phẩm Yêu Thích
                </h1>
                <div className="px-12">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-base">
                                    <th></th>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td className="flex items-end gap-3">
                                                <img src={product.thumbnail} alt={product.name} className="w-16 h-16 rounded" />
                                                <p className="h-max mb-2">{product.name}</p>
                                            </td>
                                            <th>{formatPrice(product.price)}</th>
                                            <td>
                                                <Link to={`/san-pham/${product.slug}`}>
                                                    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center btn-animation">
                                                        <i className="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    className="text-red-500 p-2 btn-animation"
                                                    onClick={() => onRemoveFromWishlist(product.id)}
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wishlist