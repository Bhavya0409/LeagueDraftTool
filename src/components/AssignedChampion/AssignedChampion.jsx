import { useDraggable } from "@dnd-kit/core";
import { AssignedChampionBox, DraggingImage } from "../../styled";

// This component represents the draggable item, which is the champion image.
const AssignedChampion = ({ championName }) => {
  // === Init ===
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: championName,
  });

  // === Render ===
  if (isDragging) {
    return (
      <DraggingImage
        src={
          new URL(`../../assets/champs/${championName}.png`, import.meta.url)
            .href
        }
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      />
    );
  }
  return (
    <AssignedChampionBox
      src={
        new URL(`../../assets/champs/${championName}.png`, import.meta.url).href
      }
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    />
  );
};

export default AssignedChampion;
