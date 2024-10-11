import ListProduct from "../../components/ListProduct/ListProduct"

function HomePage() {
    const products = [1,2,3,4,5];

    return (
        <>
            <ListProduct products={products}/>
        </>
    )
}

export default HomePage