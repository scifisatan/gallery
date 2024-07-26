import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justfiy-center">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 flex flex-col">
          <img src={image.url} alt={image.name} height={480} />
          <div>{image.name}</div>
        </div>))
      }
    </div>
  )
}

export default async function HomePage() {
  {
    return (
      <main>
        <SignedOut>
          <div className="w-full h-full text-2xl text-center">
            Please sign in to get the images
          </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>

      </main>
    );
  }
}
