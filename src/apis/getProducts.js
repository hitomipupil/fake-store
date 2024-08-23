import axios from "axios";

const getProducts = async (categoryName) => {
    try {
        const res = await axios.get(
            `https://dummyjson.com/products/category/${categoryName}`
        );

        if (res.status !== 200) {
            throw new Error(`HTTP failed status code: ${res.status}`);
        }

        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export default getProducts;
