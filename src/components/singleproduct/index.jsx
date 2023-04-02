import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as Single from "../singleproduct/index.styled";
import { API_URL } from "../shared/urls";



function SingleProduct() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetch(`${API_URL}/${id}`);
                const json = await response.json();
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
        
        <Single.SingleStraight>
            <div>
                <h1>{data.title}</h1>
                <Single.SingleImageContainer><Single.SingleImage src={data.imageUrl} /></Single.SingleImageContainer>
                <p>{data.description}</p>
                <p>Rating: {data.rating}/5</p>
              <Link to="/" style={{ textDecoration: 'none' }}> <Single.SingleButtonContainer>Home</Single.SingleButtonContainer></Link>
            </div>
        </Single.SingleStraight>
       
    );
};

export default SingleProduct