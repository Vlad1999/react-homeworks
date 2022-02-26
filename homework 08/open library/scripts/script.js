const root = document.getElementById("root");
const results = document.getElementById('search-results');

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

let searchText;

searchForm.reset();

async function search(page=1) {
  let container = document.createElement('div');
  
  let res = await fetch(`http://openlibrary.org/search.json?q=${searchText}&page=${page}`);

  window.scrollTo(0, 0);

  let books = await res.json();

  results.innerHTML = '';

  books.docs.forEach((book) => {
    container.appendChild(listItem(book));
    results.appendChild(container);
  });

  let pages = Math.ceil(books.numFound / 100);

  root.appendChild(await pagination(pages, page));
}

const container = document.createElement('div');
const ulTag = document.createElement("ul");

async function pagination(totalPages, page) {
  let liTag = "";

  container.className = "pagination";

  if (totalPages === 1) {
    liTag = `<li class="active" onclick="pagination(${totalPages}, 1); search(${page});"><span>1</span></li>`;
    ulTag.innerHTML = liTag;
    container.appendChild(ulTag);
  
    return container;
  }

  let before = page - 1;
  let after = page + 1;
  let activeLi;

  if (page > 2) {
    liTag += `<li onclick="pagination(${totalPages}, 1); search(${1})"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page === totalPages) {
    before -= 2;
  } else if (page === totalPages - 1) {
    before -= 1;
  }

  if (page === 1) {
    after += 2;
  } else if (page === 2) {
    after += 1;
  }

  for (let pageLength = before; pageLength <= after; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength === 0) {
      pageLength = pageLength + 1;
    }
    if (page === pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="${activeLi}" onclick="pagination(${totalPages}, ${pageLength}); search(${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li onclick="pagination(${totalPages}, ${totalPages}); search(${totalPages})"><span>${totalPages}</span></li>`;
  }

  ulTag.innerHTML = liTag;
  container.appendChild(ulTag);

  return container;
}

function listItem(book) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  const authorName = document.createElement("p");
  const firstPublishYear = document.createElement("p");
  const subject = document.createElement("p");

  title.textContent = book.title;
  container.appendChild(title);

  authorName.textContent = "Author Name: " + book.author_name;
  container.appendChild(authorName);

  firstPublishYear.textContent =
    "First Publish Year: " + book.first_publish_year;
  container.appendChild(firstPublishYear);

  subject.textContent = book.subject
    ? ("Subject: " + book.subject.slice(0, 5)).split(',').join(', ')
    : "No Subject!";
  container.appendChild(subject);

  return container;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchText = searchBox.value.split(" ").join("+");
  search();
});