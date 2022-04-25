import React from 'react'
import { useSearch } from '../hooks/useSearch';

export default function ProductsDashboard() {

    const { input, data, isLoading } = useSearch('product');

    return (
        <div className="container">
           {input}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    { isLoading ?
                        <tr><td colSpan={3}>Cargando datos...</td></tr>
                        :
                        data.map(product => {
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
