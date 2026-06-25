import ProductCardSkeleton from '@/components/ProductCardSkeleton'
import React from 'react'

const loading = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    )
}

export default loading