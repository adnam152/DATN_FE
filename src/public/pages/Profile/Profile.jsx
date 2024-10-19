function Profile() {
    return (
        <>
            <div className="container border bg-[#EEF0FC] w-[1440px] mx-auto ">
                <div className="container w-[1340px] my-[30px] mx-[50px] flex gril-cols-2">
                    {/* Box 1 */}
                    <div className="w-[450px] bg-white rounded-lg shadow-md p-4 text-center mr-5">
                        <div className="flex justify-end text-black  mb-2 rounded-lg items-center">
                            <i className="fa-solid fa-pen pr-2"></i>
                            <p>Edit</p>
                        </div>

                        <div className="w-[150px] h-[150px] bg-gray-200 rounded-full  mx-auto mb-2">
                            <img src="https://megaweb.vn/blog/uploads/images/meme-meo-cute-5.jpg" alt="" className="w-full h-full rounded-[150px]" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-3 text-[black]">Jeena Stones</h2>
                        <div className="flex justify-between mb-6 text-[black]">
                            <div className="flex-1">
                                <div className="font-bold text-lg">2.990.000đ</div>
                                <div className="text-sm text-gray-600">Chi tiêu</div>
                            </div>
                            <div style={{ borderLeft: '1px solid #000', borderRight: '1px solid #000' }} className="flex-1">
                                <div className="font-bold text-lg">2 tuần trước</div>
                                <div className="text-sm text-gray-600">Đơn hàng gần nhất</div>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg">7</div>
                                <div className="text-sm text-gray-600">Tổng đơn hàng</div>
                            </div>
                        </div>
                        <hr className="mb-[20px]"></hr>

                        <div className="text-center  text-[black] ">
                            <div className="mb-2">
                                <span className="mr-2">✉️</span>
                                teddy.nam152@gmail.com
                            </div>
                            <div>
                                <span className="mr-2">📞</span>
                                (+84) 357 420 766
                            </div>
                        </div>
                    </div>

                    {/* Box  2*/}

                    <div className="pl-[23px] border-l">
                        <div className="   bg-[#EEF0FC]">
                            <div role="tablist" className="tabs bg-white rounded-lg shadow-md  mt-[10px] mb-[20px] ">
                                {/* Nút Chi tiết */}
                                <input
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab cursor-pointer py-1 px-6 min-w-[140px] ml-[20px] mt-[10px] font-bold  bg-white text-[#3771C8]   text-lg  rounded-lg hover:bg-gray-100 "
                                    aria-label="Đơn hàng"
                                    defaultChecked
                                />
                                <div role="tabpanel" className="tab-content rounded-b-lg shadow-md py-1 ">
                                    <div className=" w-[800px] ml-[10px] mr-[30px] mb-[30px] rounded-b-lg shadow-md  ">

                                        <table className="w-full bg-white  rounded-lg  ">
                                            <thead className="">
                                                <tr className=" border-b py-[10px]">
                                                    <th className="text-left text-[black] py-3  pl-2">Mã đơn hàng</th>
                                                    <th className="text-left text-[black] py-3">Phương thức thanh toán</th>
                                                    <th className="text-left text-[black] py-3">Ngày đặt</th>
                                                    <th className="text-center text-[black] py-3">Trạng thái</th>
                                                    <th className="text-right text-[black] py-3 pr-2">Số tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white  rounded-lg mb-5 ">
                                                <tr className="border-b">
                                                    <td className="py-3  text-[black] pl-2">#556666</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">29/9/2024</td>
                                                    <td className="py-3 text-[black] text-center rounded-b-lg">
                                                        <span className="bg-[#FFF6F6] font-bold text-red-500 rounded-lg px-4 py-1 ">Đang chờ</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">350.000đ</td>
                                                </tr>
                                                <tr className="border-b mb-5">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center rounded-b-lg">
                                                        <span className="bg-[#F1F7FF] font-bold text-blue-500 rounded-lg px-4 py-1 ">Đang giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>
                                                <tr className="border-b mb-5">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center rounded-b-lg">
                                                        <span className="bg-[#EAFFF0] font-bold text-green-500 rounded-lg px-4 py-1">Đa giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>
                                                <tr className=" mb-5">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center rounded-b-lg">
                                                        <span className="bg-[#F1F7FF] font-bold text-blue-500 rounded-lg px-4 py-1">Đang giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>

                                            </tbody>
                                        </table>



                                    </div>
                                </div>

                                {/* Nút Đánh giá */}
                                <input
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab cursor-pointer py-1 px-6 min-w-[140px] mt-[10px]  bg-white text-black font-semibold text-lg   rounded-lg hover:bg-gray-100 "
                                    aria-label="Đánh giá"
                                />
                                <div role="tabpanel" className="tab-content bg-white   rounded-b-lg p-6 hidden">
                                    <td className="py-3  text-[black] text-center "><span className="text-[#00AB8A] rounded px-[18px] py-[4px] bg-[gray]">Đã giao</span></td>
                                </div>



                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Profile