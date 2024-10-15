import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct.js"
import { formatPrice } from "../../../utils/common.js"
import './Detail.css';

function Detail() {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        useProduct().getOneProduct('').then(res => {
            console.log(res.data);
            setProduct(res.data)
        })
    }, [])
    // ham tang giam so luong
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

   
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };
    return (
        <div className="container mx-auto px-4">
            <div className="main-content my-8 bg-white  ">
                {/* Box1  */}
                <div className="product-image flex  rounded-lg  mx-auto max-w-[1330px]  mb-[50px]  ">
                    <div className="product-images  max-w-[637px] m-[30px_0px_50px_30px]  pr-[50px] ">
                        <div className="main-image max-w-[587px] h-[617px]">
                            <img src={product.thumbnail} alt="Greatshoe 2019" className="w-full h-full rounded-lg shadow-md " />
                        </div>
                        <div className="thumbnail-list flex gap-2 mt-[31px] w-[587px]  p-[5px_10px_15px_0px] justify-around ">

                            <img src={product.medias} alt="Thumbnail 1" className="w-[100px] h-[88px] object-cover rounded cursor-pointer rounded-lg shadow-md" />
                            <img src={product.medias} alt="Thumbnail 2" className="w-[100px] h-[88px] object-cover rounded cursor-pointer rounded-lg shadow-md" />
                            <img src={product.medias} alt="Thumbnail 3" className="w-[100px] h-[88px] object-cover rounded cursor-pointer rounded-lg shadow-md" />
                            <img src={product.medias} alt="Thumbnail 4" className="w-[100px] h-[88px] object-cover rounded cursor-pointer rounded-lg shadow-md" />
                            <img src={product.medias} alt="Thumbnail 5" className="w-[100px] h-[88px] object-cover rounded cursor-pointer rounded-lg shadow-md" />

                        </div>
                    </div>

                    <div className="product-info  max-w-[625px]-[2px] m-[30px_30px_50px_0px]  ">
                        <h1 className="text-[25px] text-[black] font-bold mb-[15px] p-[0px_23px_0px_23px]">{product.name}</h1>
                        <div className="price text-[25px] mb-[15px] p-[0px_23px_0px_23px]">
                            <span className="original-price text-gray-500 font-bold line-through mr-2">{(product.discount_price)}</span>
                            <span className="discounted-price text-red-600 font-bold ">{formatPrice(product.selling_price)}</span>
                        </div>
                        <div className="rating mb-[15px] p-[0px_23px_0px_23px] ">
                            <div className="">
                                {[...Array(5)].map((_, index) => (
                                    <i
                                        key={index}
                                        className={`mr-[2px] ${index < Math.min(Math.max(product.rating, 0), 5)
                                            ? 'text-[#FFD233]'
                                            : 'text-gray-300'
                                            } fa-solid fa-star`}
                                    ></i>
                                ))}
                            </div>

                            <p className="ml-[10px]">{product.rating_count} người đánh giá</p>
                        </div>
                        <div className="product-meta mb-[15px] text-sm p-[0px_23px_0px_23px]">
                            <div className="flex  grid grid-cols-12 text-[17px] p-[5px_0px_5px_0px]  ">
                                <p className=" font-bold text-[black] col-span-2">Xuất xứ </p>
                                <p className="col-span-5 text-[black]"> : Viêt Nam </p>
                            </div>


                            <div className="flex items-center grid grid-cols-12 text-[17px] p-[5px_0px_5px_0px] ">
                                <p className=" font-bold text-[black] mr-[20px]  col-span-2"> Màu sắc </p>
                                <div className="col-span-5 flex items-center">:
                                    <div className="h-5 w-5 inline-block color-option bg-black  rounded-full ml-2 mr-1"></div>
                                    <div className=" h-5 w-5 inline-block  color-option bg-red-600 rounded-full mx-1"></div>
                                    <div className=" h-5 w-5  inline-block  color-option bg-blue-600 rounded-full mx-1"></div>
                                </div>
                            </div>
                            <div className="flex grid grid-cols-12  text-[17px] p-[5px_0px_5px_0px]">
                                <p className=" font-bold text-[black]  col-span-2">Kiểu dáng</p>
                                <p className="col-span-5 text-[black]">: {product.brand_name}</p>
                            </div>
                            <div className="flex flex grid grid-cols-12  text-[17px] p-[5px_0px_5px_0px]">
                                <p className=" font-bold text-[black]  col-span-2">Mã SP</p>
                                <p className="col-span-5 text-[black]">: {product.sku}</p>
                            </div>
                        </div>
                        <div className="p-[0px_23px_0px_23px]">
                            <p className="product-description mb-[15px] text-black border rounded text-[16px] p-[15px] rounded-lg shadow-md leading-[1.7]" dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
                        </div>
                        <div className="product-actions  text-[15px] mb-[15px] flex flex-wrap gap-4 p-[0px_23px_0px_23px]">
                            <select className="size-select text-black bg-[#F6F6F6] border my-[3px] rounded p-[11px_18px_11px_18px]">
                                <option value="">Chọn kích cỡ</option>
                                {product.attributes?.size?.map((size) => (
                                    <option key={size} value={size} className="pl-[30px]">
                                        Size {size}
                                    </option>
                                ))}
                            </select>
                            <select className="color-select text-black bg-[#F6F6F6] border my-[3px] rounded p-[10px_15px_10px_15px]">
                                <option value="">Chọn màu</option>
                                {product.attributes?.color?.map((color) => (
                                    <option style={{ background: color}}  key={color} value={color} data-color={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="product-actions text-[15px] mb-[15px] flex flex-wrap gap-4 p-[0px_23px_0px_23px]">
                            <button onClick={decreaseQuantity} className="bg-[#F6F6F6] text-black px-4 py-[10px] rounded-l focus:outline-none">
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <div className="text-center bg-white rounded-lg shadow-md border p-[10px_30px_10px_30px]">
                                {quantity}
                            </div>
                            <button onClick={increaseQuantity} className="bg-[#F6F6F6] text-black px-4 py-[10px] rounded-r focus:outline-none">
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <div className="flex flex-wrap font-bold mb-[15px] gap-5 p-[0px_23px_0px_23px] mb-[10px]">
                            <button className="buy-now bg-[#FFAE10]  text-white px-4 py-[11px] rounded">Mua ngay</button>
                            <button className="add-to-cart bg-[#317EC5] text-white px-5 py-2 rounded">
                                <i className="fa-solid fa-cart-shopping mr-[10px]"></i>
                                Thêm vào giỏ
                            </button>
                            <button className="add-to-wishlist border bg-[#F33535] text-white border-gray-300 px-5 py-2 rounded">
                                <i className="fa-regular fa-heart mr-[10px]"></i>
                                Yêu thích
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="product-details mt-8 mx-auto max-w-[1330px] rounded-lg  grid grid-cols-12">
                    {/* mo ta */}

                    <div className=" max-w-[850px] m-[30px_0px_30px_10px] rounded-lg rounded-lg shadow-md col-span-8 ">
                        <div role="tablist" className="tabs  p-2 bg-white">
                            {/* Nút Chi tiết */}
                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab cursor-pointer min-w-[120px] py-2 px-6 bg-white text-black font-semibold text-lg  hover:bg-gray-100 "
                                aria-label="Chi tiết"
                                defaultChecked
                            />
                            <div role="tabpanel" className="tab-content bg-white  rounded-b-lg p-6">
                                <div className=" w-[738px] ml-[20px] ">
                                    <div className="mb-10 ">
                                        <p className="mb-4 text-[16px] text-black   leading-[1.7]" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>
                                    {/* <div className="w-full pb-[40px]">
                                        <h3 className="font-bold text-[25px] text-lg mb-2 text-black text-left">Mô tả chi tiết</h3>
                                        <ul className="list-disc list-inside text-black text-left text-[16px]">
                                            <li>Vừa vặn thông thường</li>
                                            <li>Dáng ôm</li>
                                            <li>Thân trên bằng vải adidas PRIMEKNIT+FORGED</li>
                                            <li>Lớp lót dệt</li>
                                            <li>Đế giữa BOOST mềm</li>
                                            <li>Đế ngoài cao su Continental™</li>
                                            <li>Trọng lượng: 299 gram (kích thước UK 8.5)</li>
                                            <li>Độ dốc đế giữa: 10 mm (gót chân: 30 mm / bàn chân trước: 20 mm)</li>
                                            <li>Chứa ít nhất 20% nội dung tái chế</li>
                                        </ul>
                                    </div> */}

                                </div>
                            </div>

                            {/* Nút Đánh giá */}
                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab cursor-pointer py-2 px-6 min-w-[120px] bg-white text-black font-semibold text-lg border  rounded-lg hover:bg-gray-100 "
                                aria-label="Đánh giá"
                            />
                            <div role="tabpanel" className="tab-content bg-white  rounded-b-lg p-6 hidden">
                                <p>Đánh giá</p>
                            </div>

                          
                          
                        </div>


                    </div>
                    {/* san pham lien quan  */}
                    <div className="col-span-4 mt-[30px] ">
                        <div className="max-w-[400px] border rounded-lg shadow-md">
                            <div className="mt-5 w-[250px] flex justify-center">
                                <h2 className="text-xl text-[black] border-b-2 border-black font-bold p-[5px_0px_6px_15px] ">{product.catalogue_name}</h2>
                            </div>


                            <div className="product-list  flex flex-col py-[5px] items-center mb-[40px] mt-[10px] ">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="product-item  grid grid-cols-12  rounded-lg shadow-md  p-[5px_0px_5px_0px] mb-[10px] max-w-[360px] w-full">
                                        <div className="relative col-span-4">
                                            <div className="max-w-[100px] max-h-[100px] ">
                                                <img src={product.thumbnail} alt="Balance Running Arishi" className="w-full h-auto" />
                                                <span className="absolute top-2 left-2 bg-red-500 text-white  text-xs rounded">New</span>
                                            </div>
                                        </div>
                                        <div className=" w-full items-start ml-4 col-span-8">
                                            <h3 className="font-semibold mt-2">{product.name}</h3>
                                            <span className="text-yellow-400">
                                                {[...Array(5)].map((_, index) => (
                                                    <i
                                                        key={index}
                                                        className={`mr-[2px] ${index < Math.min(Math.max(product.rating, 0), 5)
                                                            ? 'text-[#FFD233]'
                                                            : 'text-gray-300'
                                                            } fa-solid fa-star`}
                                                    ></i>
                                                ))}
                                            </span>
                                            <p className="font-bold mt-1 text-red">{product.discount_price} đ</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Detail