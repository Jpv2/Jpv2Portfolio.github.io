document.addEventListener('DOMContentLoaded', function () {
    const project1 = document.getElementById('project1');
    const project2 = document.getElementById('project2');

    // Example interactive project: Simple Counter
    let counter1 = 0;
    project1.innerHTML = `
        <p>Counter: <span id="counter1-value">${counter1}</span></p>
        <button id="counter1-button">Increase Counter</button>
    `;
    document.getElementById('counter1-button').addEventListener('click', () => {
        counter1++;
        document.getElementById('counter1-value').textContent = counter1;
    });

    // Example interactive project: Color Changer
    project2.innerHTML = `
        <p>Change Background Color:</p>
        <button id="color-button">Change Color</button>
    `;
    document.getElementById('color-button').addEventListener('click', () => {
        document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
});
