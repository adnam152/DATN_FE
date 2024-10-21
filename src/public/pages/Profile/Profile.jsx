
function Profile() {
    return (
        <>
            <div className="container border bg-[#EEF0FC]   ">
                <div className="container w-[1340px]  mx-auto my-[30px] mx-[50px] flex gril-cols-2">
                    {/* Box 1 */}
                    <div className="w-[450px]  rounded-lg shadow-md p-4 text-center mr-5">
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
                       
                            <div role="tablist" className="tabs tabs-lifted bg-[#EEF0FC]">
                                <input style={{ width: '140px', backgroundColor: '#EEF0FC' }} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                                <div role="tabpanel" className="tab-content   rounded-box  bg-[#EEF0FC] p-[24px-48px-24px-0px] ">
                                    <div className="w-[830px] border mt-[10px]  bg-[#F9FAFB]  rounded-lg ">
                                        <table className="w-[790px] mb-[30px] ml-[20px]  rounded-lg  ">
                                            <thead className="">
                                                <tr className=" border-b py-[10px]">
                                                    <th className="text-left text-[black] py-3  pl-2">Mã đơn hàng</th>
                                                    <th className="text-left text-[black] py-3">Phương thức thanh toán</th>
                                                    <th className="text-left text-[black] py-3">Ngày đặt</th>
                                                    <th className="text-center text-[black] py-3">Trạng thái</th>
                                                    <th className="text-right text-[black] py-3 pr-2">Số tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody className="   bg-white  shadow-md  ">
                                                <tr className="border-b">
                                                    <td className="py-3  text-[black] pl-2">#556666</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">29/9/2024</td>
                                                    <td className="py-3 text-[black] text-center ">
                                                        <span className="bg-[#FFF6F6] font-bold text-red-500 rounded-lg px-4 py-1 ">Đang chờ</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">350.000đ</td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center ">
                                                        <span className="bg-[#F1F7FF] font-bold text-blue-500 rounded-lg px-4 py-1 ">Đang giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center ">
                                                        <span className="bg-[#EAFFF0] font-bold text-green-500 rounded-lg px-4 py-1">Đa giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>
                                                <tr className=" mb-15">
                                                    <td className="py-3  text-[black]  pl-2">#556633</td>
                                                    <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                    <td className="py-3  text-[black]">28/9/2024</td>
                                                    <td className="py-3  text-[black] text-center ">
                                                        <span className="bg-[#F1F7FF] font-bold text-blue-500 rounded-lg px-4 py-1">Đang giao</span></td>
                                                    <td className="text-right py-3  text-[black] pr-2">200.000đ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <input
                                    style={{ width: '140px', backgroundColor: '#EEF0FC' }}
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 2"
                                    defaultChecked />
                                    <div role="tabpanel" className="tab-content bg-[##EEF0FC]  rounded-box p-[24px-48px-24px-0px]">
                                        <div className="w-[830px] mt-[10px] border bg-[#F9FAFB]  rounded-lg ">
                                            <table className="w-[790px] mb-[30px] ml-[20px] rounded-lg  ">
                                                <thead className="">
                                                    <tr className=" border-b py-[10px]">
                                                        <th className="text-left text-[black] py-3  pl-2">Mã đơn hàng</th>
                                                        <th className="text-left text-[black] py-3">Đánh giá</th>
                                                        <th className="text-left text-[black] py-3">Nội dung </th>
                                                        <th className="text-left text-[black] py-3">Ngày đanh giá</th>

                                                    </tr>
                                                </thead>
                                                <tbody style={{ borderRadius: '30px' }} className=" bg-white border shadow-md ">
                                                    <tr className="border-b">
                                                        <td className="py-3  text-[black] pl-2">#556666</td>
                                                        <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                        <td className="py-3  text-[black]">29/9/2024</td>
                                                        <td className="py-3 text-[black] text-center ">
                                                            <span className="bg-[#FFF6F6] font-bold text-red-500 rounded-lg px-4 py-1 ">Đang chờ</span></td>

                                                    </tr>
                                                    <tr className="border-b ">
                                                        <td className="py-3  text-[black]  pl-2">#556633</td>
                                                        <td className="py-3  text-[black]">Thanh toán khi nhận hàng</td>
                                                        <td className="py-3  text-[black]">28/9/2024</td>
                                                        <td className="py-3  text-[black] text-center ">
                                                            <span className="bg-[#F1F7FF] font-bold text-blue-500 rounded-lg px-4 py-1 ">Đang giao</span></td>
                                                    </tr>

                                                </tbody>
                                            </table>

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