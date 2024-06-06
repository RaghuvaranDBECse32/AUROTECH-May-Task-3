document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('simpleModal');
    let modalBtn = document.getElementById('modalBtn');
    let closeBtn = document.getElementsByClassName('closeBtn')[0];

    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    createShapes();
});

function createShapes() {
    const shapesContainer = document.querySelector('.background');
    const shapeTypes = ['bubble', 'star', 'moon', 'code-snippet'];
    for (let i = 0; i < 10; i++) {
        let shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        let shape = document.createElement('div');
        shape.classList.add('shape', shapeType);
        shape.style.setProperty('--i', Math.random());
        shapesContainer.appendChild(shape);
    }
}
