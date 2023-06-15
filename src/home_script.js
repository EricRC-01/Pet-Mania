


var login_icon_button = document.getElementById("login_icon_button");

var side_login = document.getElementById("side_login");

login_icon_button.addEventListener("click", function() {
  // Verifica se a side_login está visível ou oculta
  if (side_login.style.display === "none") {
    // Se estiver oculta, torna a side_login visível
    side_login.style.display = "block";
  
  } else {
    // Se estiver visível, oculta a side_login novamente
    side_login.style.display = "none";
  }


});
