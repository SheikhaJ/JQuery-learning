// let passwordInput = document.getElementById("password");
// let showButton = document.getElementById("show-btn");
// 
// showButton.onclick = function() {
//   if (passwordInput.type == "password") {
    // passwordInput.type = "text";
//    showButton.textContent = "Hide ";
//   } else {
    // passwordInput.type = "password";
    // showButton.textContent = "Show";
//   }
// };


// let textArea = document.getElementById("text");
// let counter = document.getElementById("counter");

// 
// textArea.onkeyup = function(){
    
    // counter.innerText = textArea.value.length;
// 
// }

//jQuery code

$("#show-btn").click(function(){
    if( $("#password").attr("type")=== "password"){
        $("#show-btn").text("hide")
        $("#password").attr("type", "text")
    }
    else{
        $("#show-btn").text("show")
        $("#password").attr("type", "password")
    }
})

$("#text").keyup(function(){
    let counter = $("#text").val().length;
    $("#counter").text(counter);

    if (counter >= 20) {
        $("#text").css({"border": "1px solid red", "outline": "1px solid red"});
      } else {
        $("#text").css({"border": "1px solid black", "outline": "1px solid black"});
      }
    
  });








