// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// Ui Constructor
function Ui() {}

// add book to list
Ui.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');


  // Add html
  row.innerHTML = `
    <tr>${book.title}</tr>
    <tr>${book.author}</tr>
    <tr>${book.isbn}</tr>
    <tr><a href="#" class="delete">X</a></tr>
  `;

  // Append row to list
  list.appendChild(row);
}

// Show Alert()
Ui.prototype.showAlert = function(message, className) {
  // Create div element
  const div = document.createElement('div');

  // Add className
  div.className = 'error';

  // Add text node
  div.appendChild(document.createTextNode(message));

  // Get parent
  const parent = document.querySelector('.card');

  // Get form
  const form = document.querySelector('#book-form');

  // Insert alert
  parent.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.error').remove();
  }, 3000)
}




// Clear Fields
Ui.prototype.clearFields = function() {
  title.value = '';
  author.value = '';
  isbn.value = '';
}

// Event Listener Add
document.getElementById('book-form').addEventListener('submit', function(e) {
  //Get variables values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate Ui
  const ui = new Ui();

  // Validate
  if(title === '' || author === '' || isbn === ''){

    // Show error alert
    ui.showAlert('Please Fill All The Forms', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);

    // Show success alert
    ui.showAlert('Book Added', 'success');

    // Clear input
    ui.clearFields();
  }

  e.preventDefault();
})
