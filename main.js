/* KeyMaster – main.js */
var rating = 0;

function setRating(n) {
  rating = n;
  document.querySelectorAll('.stars span').forEach(function(s, i) {
    s.classList.toggle('on', i < n);
  });
}

function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById('fn').value.trim();
  var msg  = document.getElementById('fm').value.trim();
  if (!name || !msg || rating === 0) {
    alert('Please fill in your name, message and select a star rating.');
    return;
  }
  document.getElementById('ok').style.display = 'block';
  e.target.reset();
  setRating(0);
}
