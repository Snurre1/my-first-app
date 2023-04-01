import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Single from "../singleproduct/index.styled";
import { API_URL } from "../shared/urls";




function SingleProduct()  {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();
   const API = `${API_URL}/${id}`
    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
               
                const response = await fetch(API);
                const json = await response.json();
                console.log(json)
                setData(json);
            } catch (error) {
                
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [id]);

    if (isLoading || !data) {
        return <div>Loading</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    

    return (
        
        <Single.SingleStraight><div><h1>{data.title}</h1><Single.SingleImageContainer><Single.SingleImage src={data.imageUrl}/></Single.SingleImageContainer><p>{data.description}</p><p>Rating: {data.rating}/5</p><Single.SingleButtonContainer>Add to Cart</Single.SingleButtonContainer>
              </div></Single.SingleStraight>
       
    );
};

export default SingleProduct