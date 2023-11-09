hostname = "https://e-armada.onrender.com"

function dateTimeFormat(dateTimeString) {
  const datetime = new Date(dateTimeString);

  const day = String(datetime.getDate()).padStart(2, '0');
  const month = String(datetime.getMonth() + 1).padStart(2, '0');
  const year = datetime.getFullYear();

  const hour = String(datetime.getHours()).padStart(2, '0');
  const minutes = String(datetime.getMinutes()).padStart(2, '0');
  const seconds = String(datetime.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}