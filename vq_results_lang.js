function langSet(argLang) {
  var elm = document.getElementsByClassName("langChange");
  for (var i = 0; i < elm.length; i++) {
    if (elm[i].getAttribute("lang") == argLang) {
      elm[i].style.display = '';
    } else {
      elm[i].style.display = 'none';
    }
  }
}
