const btnGroup = document.querySelector('.btn-group');
const numBtn = btnGroup.querySelector('button.btn:nth-child(2)');
const prevBtn = btnGroup.querySelector('button.btn:nth-child(1)');
const nextBtn = btnGroup.querySelector('button.btn:nth-child(3)');

let counter = 1;
const setNumBtn = (num = 1) => {
    numBtn.innerHTML = num;
}

if (prevBtn) {
    prevBtn.classList.add('btn-info');
}

if (numBtn) {
    numBtn.classList.add('btn-primary');
}

if (nextBtn) {
    nextBtn.classList.add('btn-info');
}

nextBtn.addEventListener('click', (e) => {
    counter++;
    setNumBtn(counter);
});

prevBtn.addEventListener('click', (e) => {
    if (counter < 2) {
        return;
    }

    counter--;
    setNumBtn(counter);
});
