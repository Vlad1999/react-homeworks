document.getElementById("myForm").reset();

const root = document.getElementById('root');
const breed = document.getElementById('breed');

function addImage(url) {
    const frame = document.createElement('div');
    const img = document.createElement('img');

    img.src = url.message;
    img.style.width = '300px';
    img.style.height = '300px';

    frame.appendChild(img); 
    return frame;
}

async function main(breed) {
    breed = breed.split("-") ? breed.split("-") : breed;

    let res;
    if (breed.length > 1) {
        res = await fetch(`https://dog.ceo/api/breed/${breed[0]}/${breed[1]}/images/random`);
    } else {
        res = await fetch(`https://dog.ceo/api/breed/${breed[0]}/images/random`);
    }
    
    const dog = await res.json();

    console.log(dog);
    root.removeChild(root.lastChild);
    root.appendChild(addImage(dog));
}

breed.addEventListener('change', e => {
    main(e.target.value)
});
