import React, { useState } from 'react'
import { findProducts } from '../services/Products';

export default function ProductsDashboard() {

    const [products, setProducts] = useState([]);

    const handleSearch = e => {
        if(e.target.value.length > 0) {
            setProducts(findProducts(e.target.value));
        } else {
            setProducts([]);
        }
    }

    return (
        <div className="container">
            <input type="search" onChange={handleSearch}/>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product.sku}>
                                <td>{product.nombre}</td>
                                <td>{product.marca}</td>
                                <td>{product.precio}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
