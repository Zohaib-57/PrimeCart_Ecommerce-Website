import { createContext, useState, useEffect } from "react";

// Create context
const myContext = createContext();

// Create context provider
export const MyProvider = ({ children }) => {
    const [loading, setLoading] = useState(false); // Global loading state
    const [getAllProduct, setGetAllProduct] = useState([]); // Product list state

    // Function to fetch all products
    const getAllProductFunction = async () => {
        setLoading(true); // Start loading
        try {
            // Simulating API call (Replace this with actual API request)
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setGetAllProduct(data); // Set fetched products
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Fetch products on component mount
    useEffect(() => {
        getAllProductFunction();
    }, []);

    return (
        <myContext.Provider value={{ loading, setLoading, getAllProduct, getAllProductFunction }}>
            {children}
        </myContext.Provider>
    );
};

export default myContext;
