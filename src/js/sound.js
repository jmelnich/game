const sound = document.getElementById('myAudio');
const button = document.getElementById('hit');

button.addEventListener('click', () => sound.play());