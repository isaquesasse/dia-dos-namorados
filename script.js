function openHeart() {
    const leftHeart = document.querySelector('.half-heart.left');
    const rightHeart = document.querySelector('.half-heart.right');
    const message = document.querySelector('.message');
    leftHeart.classList.add('open');
    rightHeart.classList.add('open');
    message.classList.add('show');
}

function moveButton(event) {
    event.stopPropagation(); // Prevent triggering the openHeart function
    const button = event.target;
    const container = document.querySelector('.heart-container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function showHearts() {
    document.querySelector('.message').classList.add('hidden');
    document.querySelector('.floating-hearts').classList.remove('hidden');
    document.querySelector('.final-message').classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        createHeart();
    }

    setTimeout(() => {
        document.querySelector('.final-message').classList.add('show');
    }, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-35px`;  // Start from below the visible area
    heart.style.animationDelay = `${Math.random() * 30}s`;
    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 30000);
}
