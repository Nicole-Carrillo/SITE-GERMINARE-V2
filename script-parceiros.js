function abrirJbs() {
  document.getElementById('jbsinfo').style.display = "block";
}

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById('jbsinfo');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});

function abrirOrigi() {
  document.getElementById('origiinfo').style.display = "block";
}

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById('origiinfo');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});


function abrirPic() {
  document.getElementById('picinfo').style.display = "block";
}

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById('picinfo');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});