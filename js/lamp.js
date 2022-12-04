var cozi = document.getElementById('cozi');

cozi.addEventListener('click',() =>{
    if (cozinha.className == 'on') {
        cozinha.scr = 'lamp2.jpg';
        cozinha.className = 'off';
    } else {
        cozinha.scr = 'lamp1.jpg';
        cozinha.className = 'on';
    }

};

