// JQuery
function $(e) { if (e.split('')[0] === '.') { return document.getElementsByClassName(e.replace('.', '')) } else if (e.split('')[0] === '#') { return document.getElementById(e.replace('#', '')) } }

// Redirect a bit
if(location.pathname === '/'){
  location.pathname = '/home'
}
