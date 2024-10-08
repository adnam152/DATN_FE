import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const CartList = () => {
    return (
        <div className="bg-white p-4 flex-1 h-full min-h-[450px]" style={{ boxShadow: "4px 6px 3px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex items-center justify-between mb-4 ml-10 border-b pb-4 ">
                <h2 className="text-xl font-bold">Giỏ Hàng</h2>
                <p className="mr-10 text-xs">3 sản phẩm</p>
            </div>
            <div className="space-y-4">
                <CartItem />
                <CartItem />
                <CartItem />





            </div>
            <button className="text-black hover:underline mt-4 font-bold">
                <i className="fas fa-undo mr-2 text-sm ml-10"></i>Quay lại
            </button>
        </div>
    );
};

const CartSummary = () => {
    return (
        <div className="bg-white p-10 h-full min-h-[450px]" style={{ boxShadow: "4px 6px 3px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-xl font-bold mb-6 border-b pb-10">Tạm tính</h2>
            <div className="space-y-2">
                <div className="flex justify-between text-xs pb-3">
                    <span>Số lượng</span>
                    <span>3</span>
                </div>
                <div className="flex justify-between text-xs pb-3">
                    <span>Tổng tiền</span>
                    <span>597.000đ</span>
                </div>
                <div className="flex justify-between text-xs pb-3">
                    <span>Ship</span>
                    <span>0đ</span>
                </div>
                <div className="flex justify-between border-b pb-6 text-xs pb-3">
                    <span>Voucher</span>
                    <span>0đ</span>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="font-bold border-b pb-6 flex justify-between pb-5 text-xm">
                    <span>Thành tiền:</span>
                    <span>597.000đ</span>
                </h3>
            </div>
            <div className="mt-6">
                <div className="pb-2 mb-2">
                    <span className="font-bold text-xs text-black">Mã giảm giá của bạn</span>
                </div>
                <div className="flex ">
                    <input className="border p-2 rounded w-full flex-1" />
                    <button className="ml-2 bg-blue-900 text-white p-2 rounded flex-none hover:underline">Áp dụng</button>
                </div>
            </div>

            <button className="mt-10 w-full bg-green-500 text-white p-2 rounded hover:underline">Đi đến trang thanh toán</button>
        </div>
    );
};

const CartItem = () => (
    <div className="flex items-center justify-around border-b pb-4">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLWpovCeksoDnMP-Kc4Vu2YeZJZD1e3w0wjjNnWpz6kNjfoHj8" alt="T-Shirt" className="w-18 h-20 rounded-xl" />
        <div>
            <p className="text-xs text-gray-500 pb-1.5">Quần áo</p>
            <h3 className="font-bold text-xs pb-1.5">Cotton T-Shirt</h3>
            <p className="text-xs text-gray-500 italic">Trắng, XL</p>
        </div>
        <div className="flex items-center space-x-2">
            <button className="px-2 bg-gray-200">-</button>
            <div className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300">
                <span className="text-center text-xs">1</span>
            </div>
            <button className="px-2 bg-gray-200">+</button>
        </div>
        <div className="font-bold text-xs">199.000đ</div>
        <i className="fas fa-times text-black-500 text-l"></i>
    </div>
);

const Cart = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="min-h-screen bg-blue-50 p-6">
                    <div className="container mx-auto p-4">
                        <div className="flex">
                            <div className="flex-1">
                                <CartList />
                            </div>
                            <div className="w-[400px]">
                                <CartSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
