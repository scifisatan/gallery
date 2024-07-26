import { Modal } from "./modal";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) { throw new Error("Invalid Photo Id"); }
    const image = await getImage(idAsNumber);

    return (
        <Modal>
            <img src={image.url} alt={image.name} className="h-3/4" />
        </Modal>
    );
}