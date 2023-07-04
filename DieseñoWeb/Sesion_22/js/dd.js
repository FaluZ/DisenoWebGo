function selectShape(shape) {
    var container = document.getElementById('container');
    container.innerHTML = '';

    var shapeElement = document.createElement('div');
    shapeElement.classList.add('shape');
    shapeElement.id = 'shape';
    container.appendChild(shapeElement);

    shapeElement.style.animationName = 'move';
    shapeElement.style.animationDuration = '2s';

    if (shape === 'star') {
      shapeElement.style.animationDirection = 'normal';
    } else if (shape === 'hexagon') {
      shapeElement.style.animationDirection = 'reverse';
    } else if (shape === 'pacman') {
      shapeElement.style.animationDirection = 'alternate';
    }
  }
  