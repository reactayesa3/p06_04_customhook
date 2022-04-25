import { useState } from "react";
import { findProducts } from "../services/Products";


export function useSearch(entity) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = e => {
        setIsLoading(true);
        setTimeout(() => {
            if (entity === 'product') {
                if(e.target.value.length > 0) {
                    setData(findProducts(e.target.value));
                } else {
                    setData([]);
                }
            } else if (entity === 'vendor') {
                // petición a otro servicio...
            }
            setIsLoading(false);
        }, 2500)
    }

    const input =  <input type="search" onChange={handleSearch}/> // JSX

    return {input, data, isLoading}

}