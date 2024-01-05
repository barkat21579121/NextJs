async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to handle it at a higher level if needed
    }
}

export default async function setProducts() {
    try {
        const products = await fetchData();

        return (
            <div>
                {products.map((item) => (
                    <div key={item.id}>
                        {item.title}
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error setting products:", error);
        // Handle the error or rethrow it based on your application's needs
        throw error;
    }
}
