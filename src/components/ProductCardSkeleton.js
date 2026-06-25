import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <Skeleton className="h-64 w-full" />

            <div className="p-4">
                <Skeleton className="h-5 w-24 rounded-full" />

                <Skeleton className="mt-3 h-6 w-full" />
                <Skeleton className="mt-2 h-6 w-3/4" />

                <Skeleton className="mt-4 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-2/3" />

                <div className="mt-6 flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>

                <Skeleton className="mt-4 h-10 w-full rounded-lg" />
            </div>
        </div>
    );
}