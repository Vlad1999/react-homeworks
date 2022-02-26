const root = document.getElementById("root");

function filmPrototype(film) {
  const container = document.createElement("div");
  container.className = "movie-frame";

  container.innerHTML = `<b>Title: </b><span>${film.title}</span><br />
        <b>Release Date: </b><span>${film.release_date}</span><br />
        <b>Director: </b><span>${film.director}</span><br />
        <b>Producer: </b><span>${film.producer}</span><br />
        <b>Description: </b><span>${film.description}</span>`;

  return container;
}

async function main() {
  const res = await fetch(
    "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  );
  const film = await res.json();

  root.appendChild(filmPrototype(film));
}

main();
