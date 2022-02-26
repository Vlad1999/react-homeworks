let root = document.getElementById('container');

function listItem(movie) {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const director = document.createElement('p');
    const release_date = document.createElement('p');
    const description = document.createElement('p');

    title.textContent = movie.title;
    container.appendChild(title);

    release_date.textContent = "Release Rate: " + movie.release_date;
    container.appendChild(release_date);

    director.textContent = "Director: " + movie.director;
    container.appendChild(director);
    
    description.textContent = movie.description;
    container.appendChild(description);

    return container;
}


async function main() {
    let response = await fetch("https://ghibliapi.herokuapp.com/films");

    let movies = await response.json();    

    movies.forEach(movie => {
        root.appendChild(listItem(movie))
    });
};

main();