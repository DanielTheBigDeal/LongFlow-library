// A function for formating date to formate day.month.year
function formatDate(date) {
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = date.getFullYear();
  if (year < 10) {
    year = '0' + year;
  }

  return day + '.' + month + '.' + year;
}