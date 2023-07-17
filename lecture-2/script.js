//jquery effect
$("#click").click(()=>{
  $(".box").slideToggle("slow")
   //alert("text")
  //$(".loding").animate({width:"100%"}, 4000)
})

$("#stop").click(()=>{
    $(".loding").stop()
})


//ajax 
/* $.ajax({
    url: "",
    method: "Get" or "post"
    state
}) */ 
$.get({
    url:"https://jsonplaceholder.typicode.com/users", 
    success: function(res){
       // console.log(res)

       //print the user name in html page 

       //using for loop or foreach
       //for(let i=0; i<res.length; i++){
       // $(".list").append("<li>" + res[i].name + "</li>")

       //}

       //using map
       let text = res.map((user)=> `<li> ${user.name} </li>`)
       $(".list").html(text)

    }
})


//api search by username
$("#search").click(()=>{
    let username = $(".user").val()
    let urlapi = "https://api.github.com/users/"+username
    $.get({
        url: urlapi,
        success: function(data){
            //console.log(data)
            $( ".result" ).html( data.name );
            $(".image").attr("src",data.avatar_url)
        }
    })
})

//$.get({
    //url:"https://api.github.com/users/devmohamedamr",
   // success: function(data){
   //  console.log(data)
   // }
//})