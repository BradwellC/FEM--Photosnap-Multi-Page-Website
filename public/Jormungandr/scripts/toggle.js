function check() {
  var checkBox = document.getElementById('checkbox');
  var monthly = document.getElementsByClassName('monthly');
  var yearly = document.getElementsByClassName('yearly');

  for (var i = 0; i < monthly.length; i++) {
    if (checkBox.checked == false) {
      monthly[i].style.display = 'block';
      yearly[i].style.display = 'none';
    } else if (checkBox.checked == true) {
      monthly[i].style.display = 'none';
      yearly[i].style.display = 'block';
    }
  }
}
check();
