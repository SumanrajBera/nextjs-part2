import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
    return (
        <div className="flex flex-col h-full max-w-sm overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <div className="relative h-64 w-full bg-muted">
                <Link
                    href={`/products/${product.id}`}
                    className="relative block h-full w-full"
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="300px"
                        className="object-contain p-4"
                    />
                </Link>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                <div className="flex flex-1 flex-col gap-4">
                    {/* Title and description*/}
                    <div className="">
                        <h2 className="line-clamp-2 text-lg font-semibold">
                            {product.title}
                        </h2>

                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                            {product.description.length > 100
                                ? product.description.slice(0, 100) + "..."
                                : product.description}
                        </p>
                    </div>

                    {/* Price, button and badge */}
                    <div className="mt-auto">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">
                                ${product.price}
                            </span>

                            <div className="text-right">
                                <p className="text-sm font-medium">
                                    ⭐ {product.rating.rate}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {product.rating.count} reviews
                                </p>
                            </div>
                        </div>

                        <Button className="mt-4 w-full">
                            Add to Cart
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}