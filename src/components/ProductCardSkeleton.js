import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
            <Skeleton className="h-64 w-full rounded-none" />

            <div className="space-y-4 p-4">
                {/* Category */}
                <Skeleton className="h-5 w-24 rounded-full" />

                {/* Title */}
                <div className="space-y-2">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Price + Rating */}
                <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>

                {/* Button */}
                <Skeleton className="h-10 w-full rounded-md" />
            </div>
        </div>
    );
}