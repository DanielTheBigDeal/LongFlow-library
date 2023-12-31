// A function for formating date to formate day.month.year
function formatDate(date) {
  // get day from date
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  // get month from date
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  // get year from date
  let year = date.getFullYear();
  if (year < 10) {
    year = '0' + year;
  }

  // return date in correct format 
  return day + '.' + month + '.' + year;
}

// a function for cutting links appearence
// here you get a link's id and put its adress (href attribute) and cut https://
function cutLink(id) {
  let $link = document.getElementById(id);
  let linkAdress = $link.href;
  $link.textContent = $link.href.replace('https://', ''); // here we replace https:// with an empty space;
  return $link;
}

//function to show and hide an element. 
//Before using the function:
//1 Connect bootstrap library to work with its classes
//2 Create an element like: 
//const list = document.getElementById('list');
//3 Use the functions:
// show(list);
function show(elem) {
  elem.classList.remove('d-none');
  elem.classList.add('d-flex');
}

//a function to hide an element. Choose the element by id and connect bootstrap library to work with its classes
function hide(elem) {
  elem.classList.add('d-none');
}