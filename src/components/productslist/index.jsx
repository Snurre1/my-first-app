import React, { useEffect, useState }  from 'react';
import Product from '../product';
import * as PL from "../productslist/index.styled"
import { API_URL } from '../shared/urls';



function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function getProducts() {
            try {
                setIsLoading(true)
                setIsError(false)
                const response = await fetch(API_URL);
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();
    }, []);
    if (isLoading) {
        return <div>Loading..</div>
    }
    if (isError) {
        return <div>This is an error</div>
    }
    return (
        <div>
            <PL.Heading>
                <h1>The home of the goods</h1>
            </PL.Heading>
            <div>
                <PL.Container>
                {
                    products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
                </PL.Container>
            </div>
        </div>
    )
  
}

export default ProductList