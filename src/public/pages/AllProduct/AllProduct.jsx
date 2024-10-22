/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';
import { useLocation } from 'react-router';

export default function AllProduct() {
    const checkRefs = useRef({});

    const catalogues = [
        { name: 'Quần áo', slug: 'quan-ao' },
        { name: 'Giày dép', slug: 'giay-dep' },
        { name: 'Túi xách', slug: 'tui-xach' },
        { name: 'Phụ kiện', slug: 'phu-kien' },
    ];
    const brands = [
        { name: 'Nike', slug: 'nike' },
        { name: 'Adidas', slug: 'adidas' },
        { name: 'Puma', slug: 'puma' },
        { name: 'Converse', slug: 'converse' },
        { name: 'New Balance', slug: 'new-balance' },
        { name: 'Jordan', slug : 'jordan' },
    ]
    const products = [
        {
            id: 1,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 2,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia 2',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 3,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 4,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 5,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 6,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 7,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 8,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        },
        {
            id: 9,
            thumbnail: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
            name: 'Balance Running Arishia',
            rating: 4,
            price: 1199999,
            slug: 'balance-running-arishia'
        }
    ];

    function filter() {
        console.log('Filter', checkRefs.current);
    }

    return (
        <div className='flex gap-8 w-full px-12 mb-10'>
            <div className="w-96 text-sm bg-white h-max p-6 rounded-ee-lg" style={{ boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.1)' }}>
                <div>
                    <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Danh mục</h2>
                    <div className="space-y-2 mb-6 select-none">
                        {catalogues.map((catalogue, index) => {
                            return (
                                <label key={index} className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="ml-2">{catalogue.name}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Thương hiệu</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {brands.map((brand, index) => {
                            return <CheckboxItem key={index} index={index} brand={brand} checkRefs={checkRefs}/>
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Giá</h2>
                    <div className="space-y-2 mb-6 select-none">
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="radio" className="radio" name='filter_price'/>
                            <span className="ml-2">0 - 200.000</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="radio" className="radio" name='filter_price'/>
                            <span className="ml-2">200.000 - 1.000.000</span>
                        </label>
                        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
                            <input type="radio" className="radio" name='filter_price'/>
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


function CheckboxItem({ index, brand, checkRefs }) {
    const [checked, setChecked] = useState(false);
    checkRefs.current[index] = checked;

    return (
        <label
            htmlFor={`checkbox-${index}`}
            className={`px-3 py-1 rounded cursor-pointer select-none ${checked ? 'bg-sky-200 font-semibold' : 'bg-gray-200'} `}
        >
            <span>{brand.name}</span>
            <input
                type="checkbox" hidden
                id={`checkbox-${index}`}
                onChange={() => setChecked(!checked)}
                checked={checked}
            />
        </label>
    )
}