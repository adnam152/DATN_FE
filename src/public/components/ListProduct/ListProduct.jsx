/* eslint-disable react/prop-types */
import ProductItem from "../ProductItem/ProductItem"

function ListProduct({ products = [] }) {

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        <div className="flex flex-wrap mx-auto">
            {products.map((product, index) => {
                return <ProductItem key={index} product={product}/>
            })}
        </div>
    )
}

export default ListProduct
