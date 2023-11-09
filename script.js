hostname = "https://e-armada.onrender.com"

function dateTimeFormat(dateTimeString) {
  const datetime = new Date(dateTimeString);

  let day = Number(String(datetime.getDate()).padStart(2, '0'));
  let month = Number(String(datetime.getMonth() + 1).padStart(2, '0'));
  let year = datetime.getFullYear();

  let hour = Number(String(datetime.getHours() - 3).padStart(2, '0'));

  if (hour < 0) {
    hour = 24 + hour
    day--;

    if (day == 0) {
      month--;

      if (month == 0) {
        year--;
      }
    }
  }

  day = String(day).padStart(2, '0');
  month = String(month).padStart(2, '0');

  hour = String(hour).padStart(2, '0');

  const minutes = String(datetime.getMinutes()).padStart(2, '0');
  const seconds = String(datetime.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

function verifyOccurrence() {
  fetch(hostname + "/users/0ba42d6f-5bd0-4c5b-880d-d16cbbc425d1")
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação: ' + response.status);
      }
      return response.json();
    })
    .then(user => {
      fetch(hostname + "/occurrences/last")
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.status);
          }
          return response.json();
        })
        .then(occurrence => {
          if (user.street == occurrence.street || user.neighborhood == occurrence.neighborhood) {
            window.location.href = "alert.html"
          }
        })
        .catch(error => {
          console.error('Erro: ' + error);
        });
    })
    .catch(error => {
      console.error('Erro: ' + error);
    });
}

setInterval(verifyOccurrence, 1000)