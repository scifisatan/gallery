const mockUrls = [
  "https://utfs.io/f/672474ba-eaa0-4204-9c32-f231eec12221-ajuinb.jpg",
  "https://utfs.io/f/ab62b4ff-3fd1-42a4-8cfb-04b24aefb3b3-ealxc4.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>))
        }

      </div>
    </main>
  );
}
