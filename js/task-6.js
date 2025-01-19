function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const boxes = document.querySelector('#boxes');
  const input = document.querySelector('input');
  
  const btnC = document.querySelector('[data-create]');
  const btnD = document.querySelector('[data-destroy]');
  
  btnC.addEventListener('click', event => {
    event.preventDefault();
    
    const num = parseInt(input.value);
  
    if(num < 1 || num > 100){
      alert('Please enter a number between 1 and 100');
      input.value = '';
      return;
    }
    createBoxes(num);
    input.value = '';
  })
  
  btnD.addEventListener('click', destroyBoxes);
  
  function createBoxes(num){
    const fragment = document.createDocumentFragment();
  
    for(let i = 0; i < num; i++){
      const box = document.createElement('div');
      const size = 30 + i * 10;
  
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
  
    boxes.innerHTML = '';
    boxes.appendChild(fragment);
  }
  
  function destroyBoxes(){
    boxes.innerHTML = '';
  }