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
                    <h1 className="text-3xl font-bold text-black italic ">HÀNG MỚI VỀ</h1>
                    <h2 className="text-base text-center text-black py-3 italic">Xem tất cả</h2>
                </div>
                <div className="flex justify-center">
                    <ListProduct products={newProducts} />
                </div>
                <div className="flex justify-center">
                    <button className="bg-custom-black text-white py-4 px-12 rounded-4xl italic">Hiển thị thêm</button>
                </div>
            </div>



            {/* Trending */}
            <div className="banner-2 flex justify-between my-12">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/eaa5ef128327031.61540e7a31630.jpg" alt="" className="w-45 drop-shadow" />
                <img src="https://i.pinimg.com/736x/93/20/33/9320339428935a91a1fbe10fb11e8ef5.jpg" alt="" className="w-45 drop-shadow" />
            </div>
            <div className="trending bg-violet-gray py-7 ">
                <div className="grid justify-center">
                    <h1 className="text-3xl font-bold text-black italic">HÀNG MỚI VỀ</h1>
                    <h2 className="text-base text-center text-black py-3 italic">Xem tất cả</h2>
                </div>
                <div className="flex justify-center">
                    <button>
                        <i className="fa-solid fa-chevron-left fa-2xl ml-12"></i>
                    </button>
                    <ListProduct products={trendProducts} />
                    <button>
                        <i className="fa-solid fa-chevron-right fa-2xl mr-12"></i>
                    </button>
                </div>
            </div>

            <div className="policy">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto py-8">
                    <div className="flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/301741/fast-delivery-truck.svg" alt="" width={100} />
                        <span className="text-xl text-center">Miễn phí vận chuyển</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/473149/credit-card.svg" alt="" width={100} />
                        <span className="text-xl text-center">Thanh toán tiện lợi</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/424883/cashback-sales-discount.svg" alt="" width={100} />
                        <span className="text-xl text-center">Chính sách hoàn tiền</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/28763/24-hours-phone-attention-service.svg" alt="" width={100} />
                        <span className="text-xl text-center">Hỗ trợ trực tuyến</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage


