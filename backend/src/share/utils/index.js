function dateFormated() {
  const date = new Date();
  const formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

  return formatDate;
}


function dateWithoutHours() {
  const date = new Date();
  const formatedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return formatedDate;
}

module.exports = {
  dateFormated,
  dateWithoutHours
}