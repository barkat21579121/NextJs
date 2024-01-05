'use client'
import { useEffect, useState } from "react"

const Products = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {product?.map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                </div>
            ))}
        </div>

    );
}

export default Products;
