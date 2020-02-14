window.onload = function() {
  const btn = document.getElementById('clicker');
  btn.addEventListener('click', () => {
    fetch('/.netlify/functions/google-spreadsheet-fn')
      .then((res) => res.json())
      .then(console.log);
  });
};
