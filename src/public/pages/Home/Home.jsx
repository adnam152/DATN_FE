import { useEffect, useState } from "react"
import ListProduct from "../../components/ListProduct/ListProduct";
import useProduct from "../../../hooks/useProduct";

function HomePage() {
    const [newProducts, setNewProducts] = useState([]);
    const [trendProducts, setTrendProducts] = useState([]);
    const { getProducts } = useProduct();

    useEffect(() => {
        // Get new products
        getProducts()
            .then(response => {
                setNewProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Get trending products
        getProducts()
            .then(response => {
                setTrendProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {/* New arrival */}
            <div className="banner mb-12">
                <img src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg" alt="" />
            </div>
            <div className="new-arrival bg-violet-gray py-7 ">
                <div className="grid justify-center">
                    <h1 className="text-3xl font-bold text-black ">HÀNG MỚI VỀ</h1>
                    <h2 className="text-base text-center text-black py-3">Xem tất cả</h2>
                </div>
                <div className="flex justify-center">
                    <ListProduct products={newProducts} />
                </div>
                <div className="flex justify-center">
                    <button className="bg-custom-black text-white py-4 px-12 rounded-4xl">Hiển thị thêm</button>
                </div>
            </div>



            {/* Trending */}
            <div className="banner-2 flex mb-12">
                <img src="https://i0.wp.com/www.zekagraphic.com/wp-content/uploads/2021/03/2020-Sneakers-Poster-Design-01-scaled.jpg?resize=1920%2C2400&ssl=1" alt="" className="w-3/6" />
                <img src="https://i0.wp.com/www.zekagraphic.com/wp-content/uploads/2021/03/2020-Sneakers-Poster-Design-01-scaled.jpg?resize=1920%2C2400&ssl=1" alt="" className="w-3/6" />
            </div>
            <div className="trending bg-violet-gray py-7 ">
                <div className="grid justify-center">
                    <h1 className="text-3xl font-bold text-black ">HÀNG MỚI VỀ</h1>
                    <h2 className="text-base text-center text-black py-3">Xem tất cả</h2>
                </div>
                <div className="flex justify-center">
                    <ListProduct products={trendProducts} />
                </div>
            </div>

            <div className="policy">
                <div class="flex justify-between items-center max-w-screen-xl mx-auto py-8">
                    <div class="flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/301741/fast-delivery-truck.svg" alt="" width={100} />
                        <span class="text-xl text-center">Miễn phí vận chuyển</span>
                    </div>

                    <div class="flex flex-col items-center">
                       <img src="https://www.svgrepo.com/show/473149/credit-card.svg" alt="" width={100} />
                        <span class="text-xl text-center">Thanh toán tiện lợi</span>
                    </div>

                    <div class="flex flex-col items-center">
                      <img src="https://www.svgrepo.com/show/424883/cashback-sales-discount.svg" alt="" width={100} />
                        <span class="text-xl text-center">Chính sách hoàn tiền</span>
                    </div>

                    <div class="flex flex-col items-center">
                      <img src="https://www.svgrepo.com/show/28763/24-hours-phone-attention-service.svg" alt="" width={100} />
                        <span class="text-xl text-center">Hỗ trợ trực tuyến</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage


