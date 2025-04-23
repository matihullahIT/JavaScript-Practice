    // Add dragstart to all boxes
    const boxes = document.querySelectorAll('[draggable="true"]');
    boxes.forEach(box => {
      box.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
      });
    });

    const containers = document.querySelectorAll('#container1, #container2');
    containers.forEach(container => {
      container.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
      });

      container.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        container.appendChild(draggedElement);
      });
    });