import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await axios.get("http://localhost:3001/api/products");
                console.log(products)
                setProducts(products.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);

    return (
        <div className="grid grid-cols-4">
            {products.map(product => (
                <div key={product.id} className="bg-gray-300 rounded-md p-2 m-2 flex flex-col gap-2">
                    <img src="/logo192.png" alt={product.name} className="object-cover" />
                    <p>{product.name}</p>
                    {/* <p>{product.description}</p> */}
                    <p>{product.price}</p>
                    {/* <p>{product.quantity}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Home