// GLOBAL VARIABLES

var title   = document.querySelector('.input-title');
var link     = document.querySelector('.input-URL');
var enterButton     = document.querySelector('.enter-btn');
var bookMarkCards   = document.querySelector('.bookmarks')


// EVENTLISTENERS
enterButton.addEventListener('click', addBookMarks)

// FUNCTIONS

function populateCard(title, link) {
  bookMarkCards.innerHTML +=
  
  ` <article class="bookmark-card">
      <h2 class="web-title">${title}</h2>
      <a class="web-link" href="">${link}</a>
      <footer class="card-bottom">
        <h3 class="read read-delete">Read</h3>
        <h3 class="delete read-delete">Delete</h3>
      </footer>
    </article>
  ` ;
}

function addBookMarks() {
  populateCard(title.value, link.value);
  title.value = "";
  link.value = "";
}



