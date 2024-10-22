import { toast } from "react-toastify";
import { create } from "zustand";

const useWishlistStore = create((set) => ({
    wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
    addToWishlist: (product) => set(state => {
        const newWishlist = [...state.wishlist, product];
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        toast.success('Đã thêm sản phẩm vào danh sách yêu thích');
        return { wishlist: newWishlist };
    }),
    removeFromWishlist: (productId) => set(state => {
        const newWishlist = state.wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        toast.success('Đã xóa sản phẩm khỏi danh sách yêu thích');
        return { wishlist: newWishlist };
    }),
}))

export default useWishlistStore;