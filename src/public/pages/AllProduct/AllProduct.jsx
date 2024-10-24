/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';
import { useLocation, useNavigate } from 'react-router';

export default function AllProduct() {

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

    return (
        <div className='flex gap-8 w-full px-12 mb-10'>
            <FilterBox />
            <ListProduct products={products} />
        </div>
    )
}

function FilterBox() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const catalogueParams = params.get('catalogue')?.split(',');
    const brandParams = params.get('brand')?.split(',');
    const priceParams = params.get('price');
    const [catalogueState, setCatalogueState] = useState(catalogueParams || []);
    const [brandState, setBrandState] = useState(brandParams || []);
    const [priceState, setPriceState] = useState(priceParams || null);

    const priceRules = [null, '0-200000', '200000-500000', '500000-1000000', '1000000'];

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
        { name: 'Jordan', slug: 'jordan' },
    ]

    function filter() {
        let params = '?';
        if (catalogueState.length) params += `catalogue=${catalogueState.join(',')}&`;
        if (brandState.length) params += `brand=${brandState.join(',')}&`;
        if (priceState) params += `price=${priceState}`;

        const newUrl = location.pathname + params;
        navigate(newUrl);
        window.scrollTo(0, 0);
    }

    // Effect
    useEffect(() => {
        if (!location.search.includes('search')) return;
        // Reset state
        setPriceState(priceParams || null);
        setCatalogueState(catalogueParams || []);
        setBrandState(brandParams || []);
    }, [location.search]);

    return (
        <div className="w-96 text-sm bg-white h-max p-6 rounded-ee-lg" style={{ boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.1)' }}>
            {/* Catalogue filter */}
            <div>
                <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Danh mục</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {catalogues.map((catalogue, index) => {
                        return <CheckboxItem key={`catalogue_${index}`} item={catalogue} state={catalogueState} setState={setCatalogueState} />
                    })}
                </div>
            </div>

            {/* Brand filter */}
            <div>
                <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Thương hiệu</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {brands.map((brand, index) => {
                        return <CheckboxItem key={`brand_${index}`} item={brand} state={brandState} setState={setBrandState} />
                    })}
                </div>
            </div>

            {/* Price filter */}
            <div>
                <h2 className="text-base font-bold py-1 px-4 mb-4 bg-gradient-to-t from-custom-cyan to-white">Giá</h2>
                <div className="space-y-2 mb-6 select-none">
                    {priceRules.map((item, index) => {
                        return <RadioItem key={`price_${index}`} item={item} setPriceState={setPriceState} priceState={priceState} />
                    })}
                </div>
            </div>

            <button
                className="w-16 py-2 rounded-md bg-gradient-to-t from-custom-cyan to-white float-right font-bold btn-animation"
                onClick={filter}
            >
                Lọc
            </button>
        </div>
    )
}

function RadioItem({ item, setPriceState, priceState }) {
    let price = 'Tất cả';
    if (item) {
        const [min, max] = item.split('-');
        price = `${formatPrice(min)} ${max ? ' - ' + formatPrice(max) : '++'}`;
    }

    const onChangeRadio = () => {
        setPriceState(item);
    }

    return (
        <label className="flex items-center border-b border-gray-200 mb-3 pb-2 px-2">
            <input
                type="radio" className="radio" name='filter_price'
                checked={priceState === item}
                onChange={onChangeRadio}
            />
            <span className="ml-2">{price}</span>
        </label>
    )
}

function CheckboxItem({ item, state, setState }) {
    const checked = state.includes(item.slug);

    const onChangeCheck = () => {
        if (checked) {
            const newState = state.filter(slug => slug !== item.slug);
            setState(newState);
        } else {
            setState([...state, item.slug]);
        }
    }

    return (
        <label
            className={`px-3 py-1 rounded cursor-pointer select-none ${checked ? 'bg-sky-200 font-semibold' : 'bg-gray-200'} `}
        >
            <span>{item.name}</span>
            <input
                type="checkbox" hidden
                onChange={() => onChangeCheck(!checked)}
                checked={checked}
            />
        </label>
    )
}