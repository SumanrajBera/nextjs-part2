import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:shadow-lg">
            <div className="relative h-64 w-full bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="300px"
                    className="object-contain p-4"
                />
            </div>

            <div className="p-4">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {product.category}
                </span>

                <h2 className="mt-3 line-clamp-2 text-lg font-semibold text-black">
                    {product.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {
                        product.description.length > 100
                            ? product.description.slice(0, 100) + "..."
                            : product.description
                    }
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                        ${product.price}
                    </span>

                    <div className="text-right">
                        <p className="text-sm font-medium">
                            ⭐ {product.rating.rate}
                        </p>
                        <p className="text-xs text-gray-500">
                            {product.rating.count} reviews
                        </p>
                    </div>
                </div>

                <button className="mt-4 w-full rounded-lg bg-black py-2 text-white transition hover:bg-gray-800">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}