function log(data) {
  console.log('-----SUCCESS-----');
  console.log(data);
  const printout = document.getElementById('printout');
  printout.innerHTML = JSON.stringify(data, null, 2);
}
function loading() {
  const printout = document.getElementById('printout');
  printout.innerHTML = 'loading....';
}
function error(err) {
  const printout = document.getElementById('printout');
  console.log('-----ERROR-----');
  console.error(err);
  printout.innerHTML = err;
}

window.onload = function() {
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', () => {
    loading();
    fetch('/.netlify/functions/google-spreadsheet-fn')
      .then((res) => res.json())
      .then(log)
      .catch(error);
  });
  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', () => {
    loading();
    fetch('/.netlify/functions/google-spreadsheet-fn', {
      method: 'POST',
      body: JSON.stringify({
        randomNumberField: Math.floor(Math.random() * 230),
        field2: 'potato'
      })
    })
      .then((res) => res.json())
      .then(log)
      .catch(error);
  });
  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', () => {
    loading();
    const ROW_TO_GET = 0;
    fetch(`/.netlify/functions/google-spreadsheet-fn/${ROW_TO_GET}`)
      .then((res) => res.json())
      .then(log)
      .catch(error);
  });
  const btn4 = document.getElementById('btn4');
  btn4.addEventListener('click', () => {
    loading();
    const ROW_TO_GET = 0;
    fetch(`/.netlify/functions/google-spreadsheet-fn/${ROW_TO_GET}`, {
      method: 'PUT',
      body: JSON.stringify({
        randomNumberField: Math.floor(Math.random() * 230),
        field2: 'rosebud'
      })
    })
      .then((res) => res.json())
      .then(log)
      .catch(error);
  });
  const btn5 = document.getElementById('btn5');
  btn5.addEventListener('click', () => {
    loading();
    const ROW_TO_GET = 0; // in this demo we will ignore this param as it is more likely you want to delete a specific row
    // up to you to implement what you want really
    fetch(`/.netlify/functions/google-spreadsheet-fn/${ROW_TO_GET}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then(log)
      .catch(error);
  });
};
