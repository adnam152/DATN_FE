import './Checkout.css'

function Checkout() {

    return (
        <div className=" max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg m-5">

            <div className="checkout grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="infor">
                    <h1 className="text-3xl font-bold mb-8">
                        Chi Tiết Đơn Hàng
                    </h1>
                    <h2 className="text-lg font-bold mb-4">
                        Thông Tin Giao Hàng
                    </h2>
                    <div className="mb-4">
                        <label className="flex items-center space-x-2">
                            <span className="w-full flex items-center space-x-2 bg-blue-100 p-3  rounded-lg" style={{ border: "1px solid #445279" }}>
                                <input checked className="focus:ring-blue-300" type="radio" />
                                <i className="fas fa-shipping-fast " style={{ color: '#445279' }}></i>
                                <span className="font-bold" style={{ color: '#445279' }}>Phương Thức Vận Chuyển Nhanh</span>
                            </span>
                        </label>
                    </div>

                    <div className="contact mb-4">
                        <label className="block text-sm font-bold mb-2" >
                            Họ Tên Người Nhận <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full p-3 border rounded-lg font-semibold" placeholder="VD: Nguyễn Văn A" type="text" style={{ border: "1px solid black " }} />
                    </div>

                    <div className="contact mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full p-3 border rounded-lg font-semibold" placeholder="Số điện thoại" type="text" style={{ border: "1px solid black " }} />
                    </div>
                    <div className="contact mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Địa chỉ giao hàng <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full p-3 border rounded-lg font-semibold" placeholder="Số nhà/đường/ngõ/..." type="text" style={{ border: "1px solid black " }} />
                    </div>
                    <div className="contact mb-4">
                        <label className="block text-sm font-bold mb-2">Ghi chú cho đơn hàng</label>
                        <textarea className="w-full p-3 border rounded-lg" placeholder="" style={{ border: "1px solid black " }}></textarea>
                    </div>
                </div>
                <div className="bg-blue-100 p-6 rounded-2xl" style={{ boxShadow: '8px 9px 24px rgba(0, 0, 0, 0.2)' }}>
                    <div className=" mb-4 border border-solid border-gray-300 overflow-y-scroll " style={{ height: '250px' }}>
                        <div className="product flex items-center space-x-4 mb-4">
                            <img alt="Taxmax Leather Bag" className="w-16 h-16 rounded-lg" height="60" src="https://storage.googleapis.com/a1aa/image/eYca481nwYUveUY0gVWQzbcRyH3vvtPeG4uomcEtCj3vrLInA.jpg" width="60" />
                            <div className="flex-1 ">
                                <h3 className="font-semibold">
                                    Taxmax Leather Bag
                                </h3>
                                <p className="text-xs text-gray-500 m-1">
                                    Brown Vegan Leather
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    900.000đ
                                </p>
                                <p className="text-sm text-gray-500">
                                    SL: 2
                                </p>
                            </div>
                        </div>
                        <div className="product flex items-center space-x-4 mb-4">
                            <img alt="Taxmax Leather Bag" className="w-16 h-16 rounded-lg" height="60" src="https://storage.googleapis.com/a1aa/image/eYca481nwYUveUY0gVWQzbcRyH3vvtPeG4uomcEtCj3vrLInA.jpg" width="60" />
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    Taxmax Leather Bag
                                </h3>
                                <p className="text-xs text-gray-500 m-1">
                                    Brown Vegan Leather
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    900.000đ
                                </p>
                                <p className="text-sm text-gray-500">
                                    SL: 2
                                </p>
                            </div>
                        </div>
                        <div className="product flex items-center space-x-4 mb-4">
                            <img alt="Taxmax Leather Bag" className="w-16 h-16 rounded-lg" height="60" src="https://storage.googleapis.com/a1aa/image/eYca481nwYUveUY0gVWQzbcRyH3vvtPeG4uomcEtCj3vrLInA.jpg" width="60" />
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    Taxmax Leather Bag
                                </h3>
                                <p className="text-xs text-gray-500 m-1">
                                    Brown Vegan Leather
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    900.000đ
                                </p>
                                <p className="text-sm text-gray-500">
                                    SL: 2
                                </p>
                            </div>
                        </div>
                        <div className="product flex items-center space-x-4 mb-4">
                            <img alt="Taxmax Leather Bag" className="w-16 h-16 rounded-lg" height="60" src="https://storage.googleapis.com/a1aa/image/eYca481nwYUveUY0gVWQzbcRyH3vvtPeG4uomcEtCj3vrLInA.jpg" width="60" />
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    Taxmax Leather Bag
                                </h3>
                                <p className="text-xs text-gray-500 m-1">
                                    Brown Vegan Leather
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    900.000đ
                                </p>
                                <p className="text-sm text-gray-500">
                                    SL: 2
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-4">Giỏ hàng của bạn</h2>
                    <div className="pay mb-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600 font-semibold">Tổng tiền hàng</span>
                            <span className="font-semibold">4.500.000đ</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600 font-semibold">Phí vận chuyển</span>
                            <span className="font-semibold">5.000đ</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600 font-semibold">Giảm giá</span>
                            <span className="font-semibold">-100.000đ</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-black-600 font-bold">Tổng</span>
                            <span className="font-semibold text-lg">4.405.000đ</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mb-4">Phương Thức Thanh Toán:</h2>
                    <div className="mb-4 flex items-center space-x-6">
                        <label className="flex items-center space-x-2">
                            <input className="text-blue-500 rounded-full focus:ring focus:ring-blue-300" name="payment_method" type="radio" />
                            <span>Thanh toán khi nhận hàng</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input checked className="text-blue-500 rounded-full focus:ring focus:ring-blue-300" name="payment_method" type="radio" />
                            <span>VNPAY</span>
                        </label>
                    </div>

                    <button className="order w-full text-white p-3 rounded-lg font-semibold  " style={{ background: '#445279' }}>
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout