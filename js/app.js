money = 0;

function jottem()  {
  let temp = document.getElementById("status");
  if (temp.value === 100) {
    temp.value = 0;
    money+= 1;
    refresh();
  } else {
    temp.value += 10;
  }
}

function refresh(){
  document.getElementById("gold").innerHTML = "Gold : " + money;
}
