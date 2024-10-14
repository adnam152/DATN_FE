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
            <ListProduct products={newProducts} />

            {/* Trending */}
            <ListProduct products={trendProducts} />
        </>
    )
}

export default HomePage