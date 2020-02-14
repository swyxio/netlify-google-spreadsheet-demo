window.onload = function() {
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', () => {
    fetch('/.netlify/functions/google-spreadsheet-fn')
      .then((res) => res.json())
      .then(console.log);
  });
  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', () => {
    fetch('/.netlify/functions/google-spreadsheet-fn', {
      method: 'POST',
      body: JSON.stringify({
        foo: Math.floor(Math.random() * 230),
        ID: 223
      })
    })
      .then((res) => res.json())
      .then(console.log);
  });
  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', () => {
    fetch('/.netlify/functions/google-spreadsheet-fn/0')
      .then((res) => res.json())
      .then(console.log);
  });
  const btn4 = document.getElementById('btn4');
  btn4.addEventListener('click', () => {
    fetch('/.netlify/functions/google-spreadsheet-fn/0', {
      method: 'PUT',
      body: JSON.stringify({
        foo: Math.floor(Math.random() * 230),
        ID: 223
      })
    })
      .then((res) => res.json())
      .then(console.log);
  });
};
