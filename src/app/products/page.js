// 'use client'
import ProductCard from '@/components/ProductComponent';
import axios from 'axios'
import React from 'react'

// This is a server component and to make it into client we need to use 'use client'
const page = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    let products = await res.json()

    return (
        <div className='grid grid-cols-4 gap-2 m-2'>
            {
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default page