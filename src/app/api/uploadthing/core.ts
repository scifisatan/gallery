import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server"
import { images } from "~/server/db/schema";
import { db } from "~/server/db";
const f = createUploadthing();


export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 40 }, })
        .middleware(async ({ req }) => {
            const user = auth();

            if (!user) throw new UploadThingError("Unauthorized");

            return { userId: user.userId };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);

            console.log("file url", file.url);
            await db.insert(images).values({
                name: file.name ?? '',
                url: file.url ?? '',
                userId: metadata.userId ?? '',
            })
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter
