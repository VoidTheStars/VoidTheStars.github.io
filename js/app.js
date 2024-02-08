function jottem()  {
  let temp = document.getElementById("status");
  if (temp.value === 100) {
    temp.value = 0;
  } else {
    temp.value += 10;
  }
}
