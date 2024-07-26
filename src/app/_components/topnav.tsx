"use client"
import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

function TopNav() {
    const router = useRouter();
    return (
        <nav className="flex w-full items-center justify-between border-b p-5 text-x1 font-semibold">
            <div>
                Gallery
            </div>
            <div className="flex gap-6">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        className="pt-5"
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh()
                        }} />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav;
