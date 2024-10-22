import { Link } from "react-router-dom";

const CartList = () => {
    return (
        <div className="bg-white p-4 pb-28 flex-1 h-full min-h-[450px] relative">
            <div className="flex items-center justify-between mb-4 ml-10 border-b pb-4 ">
                <h2 className="text-xl font-bold">Giỏ Hàng</h2>
                <p className="mr-10 ">3 sản phẩm</p>
            </div>
            <div className="space-y-4">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <button className="text-black mt-4 font-bold absolute bottom-12">
                <i className="fas fa-undo mr-2 text-sm ml-10"></i>Quay lại
            </button>
        </div>
    );
};

const CartSummary = () => {
    return (
        <div className="bg-white p-10 h-full min-h-[450px]">
            <h2 className="text-xl font-bold mb-6 border-b pb-10">Tạm tính</h2>
            <div className="space-y-2">
                <div className="flex justify-between pb-3">
                    <span>Số lượng</span>
                    <span>3</span>
                </div>
                <div className="flex justify-between pb-3">
                    <span>Tổng tiền</span>
                    <span>597.000đ</span>
                </div>
                <div className="flex justify-between pb-3">
                    <span>Ship</span>
                    <span>0đ</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                    <span>Voucher</span>
                    <span>0đ</span>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="font-bold border-b flex justify-between pb-6">
                    <span>Thành tiền:</span>
                    <span>597.000đ</span>
                </h3>
            </div>
            <div className="my-6 pb-6 border-b">
                <div className="pb-2 mb-2">
                    <span className="font-bold  text-black">Mã giảm giá của bạn</span>
                </div>
                <div className="flex ">
                    <input className="input input-bordered h-max py-2 flex-1" />
                    <button className="ml-2 text-white px-3 rounded flex-none" style={{ background: '#445279' }}>Áp dụng</button>
                </div>
            </div>

            <Link to='/thanh-toan' className="btn btn-success text-white w-full">
                <span className="text-base">Đi đến trang thanh toán</span>
                <i className="fa-solid fa-chevron-right"></i>
            </Link>
        </div>
    );
};

const CartItem = () => (
    <div className="flex items-center justify-around border-b pb-4">
        <img srcSet="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLWpovCeksoDnMP-Kc4Vu2YeZJZD1e3w0wjjNnWpz6kNjfoHj8" alt="T-Shirt" className="w-18 h-20 rounded-xl" />
        <div>
            <p className=" text-gray-500 pb-1.5">Quần áo</p>
            <h3 className="font-bold  pb-1.5">Cotton T-Shirt</h3>
            <p className=" text-gray-500 italic text-sm">Trắng, XL</p>
        </div>
        <div className="flex items-center space-x-2">
            <button className="p-2 text-xs">
                <i className="fa-solid fa-minus"></i>
            </button>
            <div className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300">
                <span className="text-center ">1</span>
            </div>
            <button className="p-2 text-xs">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
        <div className="font-bold ">199.000đ</div>
        <i className="fas fa-times text-black-500 text-l"></i>
    </div>
);

const Cart = () => {
    return (
        <>
            <div className="bg-blue-50 p-12">
                <div className="container min-h-screen mx-auto rounded" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.15)" }}>
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
        </>
    );
};

export default Cart;
