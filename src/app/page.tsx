import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justfiy-center p-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 flex flex-col">
          <Link href={`/img/${image.id}`}>
            <img src={image.url} alt={image.name} height={480} />
          </Link>
          <div>{image.name}</div>
        </div>))
      }
    </div >
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
