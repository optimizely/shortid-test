var shortid = require('shortid');

var log = document.getElementById('log');
for (var i = 0; i < 10; i++) {
  var item = document.createElement('li');
  try {
    item.innerHTML = shortid.generate();
  } catch(e) {
    item.innerHTML = 'ERROR: ' + e.toString();
  }

  log.appendChild(item);
}
