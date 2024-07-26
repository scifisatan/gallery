"use client"
import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";
import SimpleUploaButton from "../simple-upload-button";

function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between border-b p-5 text-x1 font-semibold">
            <div className="text-2xl">
                Gallery
            </div>
            <div className="flex gap-6 align-center ">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>

                    <SimpleUploaButton />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav;
