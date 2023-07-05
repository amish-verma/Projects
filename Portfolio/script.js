$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation 
    var typed = new Typed(".typing", {
        strings: ["Student", "Front-end Developer", "Designer"],
        typeSpeed: 180,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Front-end Developer",  "Designer"],
        typeSpeed: 180,
        backSpeed: 100,
        loop: true
    });


});

function send(){
    var par ={
        subject : document.getElementById("subject").value,
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
        
    }
    emailjs.send("service_mjgtxoy","template_e9k41ih",par).then(function(res){
        alert("Success !" + res.status);
    })
}





