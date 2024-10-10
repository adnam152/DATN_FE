import React, { useRef } from 'react'
import Footer from '../../components/common/Footer/Footer'
import Header from '../../components/common/Header/Header'
import ProductItem from '../../components/common/ProductItem/ProductItem';

export default function AllProduct() {
    const buttonRefs = useRef([]);

    const handleClick = (index) => {
        console.log(`Button ${index + 1} clicked!`);
    };

    const setRef = (el, index) => {
        if (el && !buttonRefs.current[index]) {
            buttonRefs.current[index] = el;
            el.addEventListener('click', () => handleClick(index));
        }
    };
    return (
        <div>
            <Header />
            <main className='flex m-3'>
                <div className="w-72 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 bg-gradient-to-t from-custom-cyan to-white">Danh mục</h2>
                    <div className="space-y-2 mb-6">
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Giày thể thao</span>
                        </label>
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Giày công sở</span>
                        </label>
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Khác</span>
                        </label>
                    </div>
                    <h2 className="text-lg font-semibold mb-4 bg-gradient-to-t from-custom-cyan to-white">Thương hiệu</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <label for='checkbox-1' className="px-3 py-1 bg-gray-200 rounded-full"   ref={(el) => setRef(el, 1)}>
                            Adidas
                            <input type="checkbox" hidden id='checkbox-1'/>
                        </label>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                            Puma
                        </span>
                        <span className="px-3 py-1 bg-gray-200 rounded-full">
                            Converse
                        </span>
                        <span className="px-3 py-1 bg-gray-200 rounded-full">
                            New Balance
                        </span>
                        <span className="px-3 py-1 bg-gray-200 rounded-full">
                            Jordan
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                            Nike
                        </span>
                    </div>
                    <h2 className="text-lg font-semibold mb-4 bg-gradient-to-t from-custom-cyan to-white">Giá</h2>
                    <div className="space-y-2 mb-6">
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">0 - 200.000</span>
                        </label>
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">200.000 - 1.000.000</span>
                        </label>
                        <label className="flex items-center border-b-2 pb-1">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">1.000.000 ++</span>
                        </label>
                    </div>
                    <button className="w-16 py-2 rounded-md bg-gradient-to-t from-custom-cyan to-white float-right">
                        Lọc
                    </button>
                </div>


                <div className="products">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                        <ProductItem></ProductItem>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}
