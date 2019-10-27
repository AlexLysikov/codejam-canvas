const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function generatePicture(way) {
    const canvas = document.getElementById('picture');
    const ctx = canvas.getContext('2d');

    fetch(way)
    .then(res => res.json())
    .then(data => { 
        
    let jsonImg = data;
    
    if (canvas.getContext) {
        if (way === './data/image.png') {
            img = new Image();
            img.addEventListener('load', function() {
            ctx.drawImage(img, 0, 0, 256, 256, 0, 0, 512, 512);
            }, false);

        } else {
            for (let i=0; i<5; i++){
                for (let j=0; j<5; j++){
                    if (way === './data/4x4.json') {
                        ctx.fillStyle = `#${jsonImg[i][j]}`;
                        ctx.fillRect(j, i, 128, 128);
                    } else {
                        ctx.fillStyle = `rgba(${jsonImg[i][j]})`;
                        ctx.fillRect(j, i, 16, 16);
                    } 
                }
            }
        }
    }
});
}

first.addEventListener('click', generatePicture('./data/4x4.json'), false)
second.addEventListener('click', generatePicture('./data/32x32.json'), false)
third.addEventListener('click', generatePicture('./data/image.png'), false)
