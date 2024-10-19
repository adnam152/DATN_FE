import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 ">
            <div className="bg-blue-50 py-6">
                <div className="flex justify-center items-center ">
                    <div className="max-w-7xl bg-white p-5 flex flex-col md:flex-row gap-10 rounded-2xl" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}>
                        <div className="md:w-1/2">
                            <img
                                src="https://trangphuctotnghiep.com/wp-content/uploads/2024/07/11-702x800.jpg"
                                alt=""
                                className="w-full h-[500px] rounded-md shadow-lg object-cover"
                            />
                        </div>

                        <div className="md:w-1/2 text-left">
                            <h2 className="text-xl font-bold mb-4">Về cửa hàng của chúng tôi</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Về cửa hàng cửa chúng tôi <br />
                                Chào mừng đến với cửa hàng một trang web bán hàng thời trang
                                nam nữ tuyệt vời! Chúng tôi tự hào là điểm đến lý tưởng cho
                                những người yêu thích phong cách và tự tin. Tại đây,
                                chúng tôi mang đến cho bạn một bộ sưu tập đa dạng
                                và thú vị của các sản phẩm thời trang nam nữ. <br />
                                Với sự kết hợp giữa xu hướng mới nhất và phong cách sáng tạo,
                                chúng tôi cam kết đem đến cho bạn những bộ trang phục và phụ
                                kiện hoàn hảo để tôn lên cá tính và gu thẩm mỹ riêng của bạn. <br />
                                Về cửa hàng cửa chúng tôi <br />
                                Chào mừng đến với cửa hàng một trang web bán hàng thời trang
                                nam nữ tuyệt vời! Chúng tôi tự hào là điểm đến lý tưởng cho
                                những người yêu thích phong cách và tự tin. Tại đây,
                                chúng tôi mang đến cho bạn một bộ sưu tập đa dạng
                                và thú vị của các sản phẩm thời trang nam nữ. <br />
                                Với sự kết hợp giữa xu hướng mới nhất và phong cách sáng tạo,
                                chúng tôi cam kết đem đến cho bạn những bộ trang phục và phụ
                                kiện hoàn hảo để tôn lên cá tính và gu thẩm mỹ riêng của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white py-4">
                    <div className="border border-gray-400 rounded-2xl shadow-md p-6">
                        <div className="max-w-6xl mx-auto flex justify-between text-center">
                            {/* MPVC */}
                            <div className="flex flex-col items-center">
                                <div className="text-gray-600 mb-2">
                                    <i className="fas fa-truck text-3xl"></i>
                                </div>
                                <h3 className="text-l font-semibold">Miễn phí vận chuyển</h3>
                                <p className="text-gray-600">Miễn phí cho đơn hàng từ 700000 VND</p>
                            </div>

                            {/* hỖ TRỢ */}
                            <div className="flex flex-col items-center">
                                <div className="text-gray-600 mb-2">
                                    <i className="fas fa-headset text-3xl"></i>
                                </div>
                                <h3 className="text-l font-semibold">Hỗ trợ 24/7</h3>
                                <p className="text-gray-600">Hỗ trợ 24 giờ mỗi ngày</p>
                            </div>

                            {/* HOÀN TIỀN */}
                            <div className="flex flex-col items-center">
                                <div className="text-gray-600 mb-2">
                                    <i className="fas fa-undo text-3xl"></i>
                                </div>
                                <h3 className="text-l font-semibold">Hoàn tiền</h3>
                                <p className="text-gray-600">Nếu sản phẩm lỗi do nhà sản xuất</p>
                            </div>

                            {/* GIẢM GIÁ */}
                            <div className="flex flex-col items-center">
                                <div className="text-gray-600 mb-2">
                                    <i className="fas fa-percent text-3xl"></i>
                                </div>
                                <h3 className="text-l font-semibold">Giảm giá đơn hàng</h3>
                                <p className="text-gray-600">Mỗi đơn hàng trên 2 triệu VND</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto p-6">
                    <div className="flex flex-col md:flex-row items-start mb-8 gap-20">
                        <div className="md:w-1/2 p-1">
                            <img
                                src=" https://jobsgo.vn/blog/wp-content/uploads/2024/09/Cac-Yeu-To-Tao-Nen-Dich-Vu-Khach-Hang.jpg" // Replace with the actual image link
                                alt="Customer service illustration"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-3/4 p-4">
                            <h2 className="text-xl font-bold mb-4">Dịch Vụ Khách Hàng</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Dịch vụ khách hàng tại cửa hàng chúng tôi luôn đặt sự
                                hài lòng của khách hàng lên hàng đầu. Với đội ngũ nhân
                                viên nhiệt tình và chuyên nghiệp, chúng tôi sẵn sàng hỗ
                                trợ bạn trong suốt quá trình mua sắm, từ tư vấn sản
                                phẩm phù hợp đến giải đáp mọi thắc mắc liên quan.
                                Chúng tôi cam kết cung cấp dịch vụ nhanh chóng, chu đáo
                                và luôn lắng nghe ý kiến của khách hàng để ngày càng hoàn thiện.
                                Hãy đến với cửa hàng của chúng tôi để trải nghiệm dịch vụ
                                khách hàng tận tâm và thân thiện.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-start gap-20">
                        <div className="md:w-1/2 p-1">
                            <img
                                src=" https://www.rankmedigital.ca/wp-content/uploads/2023/11/sem-importance.png" // Replace with the actual image link
                                alt="In-store experience illustration"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-3/4 p-4">
                            <h2 className="text-xl font-bold mb-4">Tại cửa hàng chúng tôi</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Tại cửa hàng của chúng tôi, bạn sẽ tìm thấy những sản phẩm thời trang
                                mới nhất với chất lượng vượt trội và giá cả phải chăng. Chúng tôi không
                                chỉ mang đến những mẫu mã phong phú mà còn có nhiều chương trình
                                khuyến mãi hấp dẫn dành cho khách hàng thân thiết. Đến với chúng tôi,
                                bạn sẽ được trải nghiệm dịch vụ chăm sóc khách hàng tận tâm, tư vấn
                                nhiệt tình để chọn lựa những sản phẩm phù hợp nhất. Hãy ghé thăm ngay để
                                nhận ưu đãi đặc biệt và trở thành một phần của cộng đồng mua sắm
                                chỉ mang đến những mẫu mã phong phú mà còn có nhiều chương trình
                                khuyến mãi hấp dẫn dành cho khách hàng thân thiết.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
