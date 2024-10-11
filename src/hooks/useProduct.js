// /api/v1/products?limit=5&order_by=created_at

import axios from "axios";

const apiProducts = "http://localhost:3000/products";
const apiDetails = "http://localhost:3000/product_details";

export default function useProduct() {
    const getProducts = async (params = '') => {
        try {
            const response = await axios.get(apiProducts + params);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    const getOneProduct = async (slug = 'product-1') => {
        try {
            const response = await axios.get(apiDetails + `/${slug}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    return { getOneProduct, getProducts };
}
