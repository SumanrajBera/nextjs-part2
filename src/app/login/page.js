import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
    return (
        <div className="flex h-full items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Welcome back! Sign in to continue.
                    </p>
                </div>

                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email / Username
                        </Label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Enter your email or username"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <Button className="w-full" type="submit">
                        Login
                    </Button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="font-medium text-primary hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Page;