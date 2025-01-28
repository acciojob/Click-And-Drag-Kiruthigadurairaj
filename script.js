// Your code here.
 let draggedElement = null;
  let offsetX = 0;
  let offsetY = 0;
  const items = document.querySelector(".items");
  const cubes = document.querySelectorAll(".item");
  cubes.forEach((cube) => {
    cube.addEventListener("mousedown", (e) => {
      draggedElement = cube;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      cube.style.position = "absolute";
      cube.style.zIndex = "1000";
    });
  });
  items.addEventListener("mousemove", (e) => {
    if (draggedElement) {
      const itemsRect = items.getBoundingClientRect();
      const newX = e.clientX - itemsRect.left - offsetX;
      const newY = e.clientY - itemsRect.top - offsetY;
      const maxX = itemsRect.width - draggedElement.offsetWidth;
      const maxY = itemsRect.height - draggedElement.offsetHeight;

      draggedElement.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
      draggedElement.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
    }
  });
  items.addEventListener("mouseup", () => {
    if (draggedElement) {
      draggedElement.style.zIndex = "0"; // Reset z-index
      draggedElement = null; // Clear the dragged element
    }
  });
  items.addEventListener("mouseleave", () => {
    draggedElement = null;
  });