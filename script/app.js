const catBtn = document.querySelector('.cat-btn');
const cat = document.querySelector('.cat-picture');

const scratchContainer = document.querySelector('.scratch-container');
const scratch = document.querySelector('.scratch');

let petCount = 0;

function touchCat() {
    if (isCatAngry()) {
        return;
    }

    petCount++;

    if (petCount === 10) {
        setWarning();
    }

    if (petCount === 20) {
        annoyCat();
        return;
    }

    petCat();
};

const petCat = () => {
    playMeowSound();

    setHappyState();

    setTimeout(() => {
        removeHappyState();
    }, 500);
};

const annoyCat = () => {
    petCount = 0;

    setAngryState();
    playAngrySound();
    setShakeAnimation();
    setScratch();
    playScratchSound();
    setScratchAnimation();

    setTimeout(() => {
        removeAngryState();
    }, 1500);

    setTimeout(() => {
        removeShakeAnimation();
        removeScratch();
        removeScratchAnimation();
    }, 2500);
};

const setNormalState = () => cat.classList.add('normal-state');
const setHappyState = () => cat.classList.add('happy-state');
const setAngryState = () => cat.classList.add('angry-state');

const removeNormalState = () => cat.classList.remove('normal-state');
const removeHappyState = () => cat.classList.remove('happy-state');
const removeAngryState = () => cat.classList.remove('angry-state');

const setShakeAnimation = () => catBtn.classList.add('shake-animation');
const removeShakeAnimation = () => catBtn.classList.remove('shake-animation');

const setScratch = () => scratchContainer.classList.remove('hidden');
const removeScratch = () => scratchContainer.classList.add('hidden');

const setScratchAnimation = () => {
    scratchContainer.classList.add('scratch-animation');
    scratchContainer.classList.add('scratch-animation');
};
const removeScratchAnimation = () => {
    scratchContainer.classList.remove('scratch-animation');
    scratchContainer.classList.remove('scratch-animation');
};

const isCatAngry = () => cat.classList.contains('angry-state');

const setWarning = () => {
    const warning = document.querySelector('.warning');

    warning.classList.remove('hidden');

    setTimeout(() => {
        warning.classList.add('hidden');
    }, 3000);
};

const playMeowSound = () => {
    const meowSound = new Audio('./assets/sounds/meow.mp3');

    meowSound.currentTime = 0;
    meowSound.volume = 0.1;
    meowSound.play();
};

const playAngrySound = () => {
    const angrySound = new Audio('./assets/sounds/angry.mp3');

    angrySound.currentTime = 0;
    angrySound.volume = 0.2;
    angrySound.play();
};

const playScratchSound = () => {
    const scratchSound = new Audio('./assets/sounds/scratch.mp3');

    scratchSound.currentTime = 0;
    scratchSound.volume = 0.4;
    scratchSound.play();
};
