/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ListProduct.css';
import useWishlistStore from '../../../store/useWishlistStore';

function ListProduct({ products = [] }) {
    console.log('[ListProduct] render - reRender');

    return (
        <div className="flex flex-wrap gap-3 h-max">
            {products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            })}
        </div>
    )
}

function ProductItem({ product }) {
    const wishList = useWishlistStore(state => state.wishlist);
    const addToWishlist = useWishlistStore(state => state.addToWishlist);
    const removeFromWishlist = useWishlistStore(state => state.removeFromWishlist);
    const isWishList = wishList.some(item => item.id === product.id);

    const onToggleWishlist = () => {
        isWishList ? removeFromWishlist(product.id) : addToWishlist(product);
    }

    return (
        <div className="bg-white rounded-lg p-4 w-52 shadow-sm hover:shadow-lg hover:scale-105 transition-all flex flex-col">
            <div className=" relative">
                <img src={product.thumbnail} />
                <span className="product-note absolute top-2 right-2 bg-custom-red text-white px-2 py-1 text-xs font-bold rounded">New</span>
            </div>

            <Link to={`/san-pham/${product.slug}`} className="h-1/6 font-semibold text-slate-500 hover:underline hover:text-blue-900 my-2">
                {product.name}
            </Link>

            <div className="">
                <div className="">
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <i key={index} className={`fa-solid fa-star ${index < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}></i>
                    })}
                </div>
                <div className="product-detail flex justify-between">
                    <div className="font-bold mt-1">
                        {formatPrice(product.price)}
                    </div>
                    <div className="space-x-2 ">
                        <button
                            className={`transition-colors w-8 h-8 rounded-full wishlist-btn ${isWishList ? 'active' : ''}`}
                            onClick={onToggleWishlist}
                        >
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <Link to={`/san-pham/${product.slug}`}>
                            <button className=" bg-light-gray hover:bg-blue-600 hover:text-white transition-colors w-8 h-8 rounded-full addcart-btn">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct
