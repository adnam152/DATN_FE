/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';

export default function AllProduct() {
    const checkRefs = useRef({});
    const brands = ['Adidas', 'Puma', 'Converse', 'New Balance', 'Jordan', 'Nike'];
    console.log('[AllProduct] render - reRender');

    const products = [1, 2, 3, 4, 5, 6, 7];

    function filter() {
        console.log('Filter', checkRefs.current);
    }

    return (
        <div className='grid grid-flow-col gap-8 w-full px-12'>
            <div className="w-72 bg-white h-max p-6 rounded-ee-lg" style={{ boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.1)' }}>
                <div>
                    <h2 className="text-lg font-semibold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Danh mục</h2>
                    <div className="space-y-2 mb-6 select-none">
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Giày thể thao</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Giày công sở</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">Khác</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Thương hiệu</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {brands.map((brand, index) => {
                            return <CheckboxItem key={index} index={index} content={brand} checkRefs={checkRefs}/>
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Giá</h2>
                    <div className="space-y-2 mb-6 select-none">
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">0 - 200.000</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">200.000 - 1.000.000</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="ml-2">1.000.000 ++</span>
                        </label>
                    </div>
                </div>
                <button
                    className="w-16 py-2 rounded-md bg-gradient-to-t from-custom-cyan to-white float-right"
                    onClick={filter}
                >
                    Lọc
                </button>
            </div>

            <ListProduct products={products} />
        </div>
    )
}


function CheckboxItem({ index, content, checkRefs }) {
    const [checked, setChecked] = useState(false);
    checkRefs.current[index] = checked;

    return (
        <label
            htmlFor={`checkbox-${index}`}
            className={`px-3 py-1 rounded cursor-pointer select-none ${checked ? 'bg-sky-200 font-semibold' : 'bg-gray-200'} `}
        >
            <span>{content}</span>
            <input
                type="checkbox" hidden
                id={`checkbox-${index}`}
                onChange={() => setChecked(!checked)}
                checked={checked}
            />
        </label>
    )
}