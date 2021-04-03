var $input = document.getElementById("rpm");
var $div = document.querySelector("div");

console.log($input, $div);

$input.addEventListener("change", onchange, false);

function onchange() {
  var rpm = $input.value;
  var duration = 60 / rpm;
  $div.style.animationDuration = duration + 's';
}

onchange();