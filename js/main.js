$(document).ready(function(){
    //Welcome section
    $('.welcome').css({
        'z-index':'1','display':'block'
    });
    $('body').click(function()
                   { 
        $('.welcome').css('display','none');
    });
    //navbar
    $('.navbar-light .navbar-nav .dropdown-menu').css('display','none');
    $('.navbar-light .navbar-nav .dropdown').mouseenter(function(){
        $('.navbar-light .navbar-nav .dropdown-menu').css('display','block');
    });
    $('.navbar-light .navbar-nav .dropdown-menu').mouseleave(function(){
        $('.navbar-light .navbar-nav .dropdown-menu').css({'display':'none', 'transition':'1s'});
    });
    //service3
    $('.service1').mouseenter(function()
    {
        $('.hover1').css("width",'100%');
        $('.hover1').css('transition','1s');
        $('.rotate1 .fa-plus').css({
           'transform':'rotate(360deg)',
            'transition':'1s'
        });
    });
    $('.service1').mouseleave (function()
    {
        $('.hover1').css("width","50px");
        $('.hover1').css('transition','1s');
        $('.rotate1 .fa-plus').css('transform','rotate(0deg)');
    });
    //service2
    $('.service2').mouseenter(function()
    {
        $('.hover2').css("width","100%");
        $('.hover2').css('transition','1s');
         $('.rotate2 .fa-plus').css({
           'transform':'rotate(360deg)',
            'transition':'1s'
        });
    });

    $('.service2').mouseleave (function()
    {
        $('.hover2').css("width","50px");
        $('.hover2').css('transition','1s');
        $('.rotate2 .fa-plus').css('transform','rotate(0deg)');
    });
    //service3

    $('.service3').mouseenter(function()
    {
        $('.hover3').css("width","100%");
        $('.hover3').css('transition','1s');
        $('.rotate3 .fa-plus').css({
           'transform':'rotate(360deg)',
            'transition':'1s'
        });
    });
    $('.service3').mouseleave (function()
    {
        $('.hover3').css("width","50px");
        $('.hover3').css('transition','1s');
        $('.rotate3 .fa-plus').css('transform','rotate(0deg)');
    });
    
    //Start gallery section hover
    $(".photo:first-child").mouseenter(function(){
       $('.over1').css('display','block');
       $(".photo:first-child").css('border','5px solid white');
    });
    $(".photo:first-child").mouseleave(function(){
       $('.over1').css('display','none');
       $(".photo:first-child").css('border','5px solid #debd87');
        $('.photo:first-child').css('transform','rotate(0deg)');
    });
    
    $(".photo:nth-child(2)").mouseenter(function(){
       $('.over2').css('display','block');
       $(".photo:nth-child(2)").css('border','5px solid white');
    });
    $(".photo:nth-child(2)").mouseleave(function(){
       $('.over2').css('display','none');
       $(".photo:nth-child(2)").css('border','5px solid #debd87');
    });
    
    $(".photo:nth-child(3)").mouseenter(function(){
       $('.over3').css('display','block');
       $(".photo:nth-child(3)").css('border','5px solid white');
    });
    $(".photo:nth-child(3)").mouseleave(function(){
       $('.over3').css('display','none');
       $(".photo:nth-child(3)").css('border','5px solid #debd87');
    });
    
    $(".photo:nth-child(4)").mouseenter(function(){
       $('.over4').css('display','block');
       $(".photo:nth-child(4)").css('border','5px solid white');
    });
    $(".photo:nth-child(4)").mouseleave(function(){
       $('.over4').css('display','none');
       $(".photo:nth-child(4)").css('border','5px solid #debd87');
    });
    
    $(".photo:nth-child(5)").mouseenter(function(){
       $('.over5').css('display','block');
       $(".photo:nth-child(5)").css('border','5px solid white');
    });
    $(".photo:nth-child(5)").mouseleave(function(){
       $('.over5').css('display','none');
       $(".photo:nth-child(5)").css('border','5px solid #debd87');
    });
    
    $(".photo:nth-child(6)").mouseenter(function(){
       $('.over6').css('display','block');
       $(".photo:nth-child(6)").css('border','5px solid white');
    });
    $(".photo:nth-child(6)").mouseleave(function(){
       $('.over6').css('display','none');
       $(".photo:nth-child(6)").css('border','5px solid #debd87');
    });
    
    $(".photo:nth-child(7)").mouseenter(function(){
       $('.over7').css('display','block');
       $(".photo:nth-child(7)").css('border','5px solid white');
    });
    $(".photo:nth-child(7)").mouseleave(function(){
       $('.over7').css('display','none');
       $(".photo:nth-child(7)").css('border','5px solid #debd87');
    });
    
    $(".photo:last-child").mouseenter(function(){
       $('.over8').css('display','block');
       $(".photo:last-child").css('border','5px solid white');
    });
    $(".photo:last-child").mouseleave(function(){
       $('.over8').css('display','none');
       $(".photo:last-child").css('border','5px solid #debd87');
    });
    //End gallery section hover
    /*Start Login Section*/
    $('.login-nav').click(function()
     {  
        $('.login').css({
            backgroundColor:'#e4e4e4',
            'margin-top':'10px',
            'margin-bottom':'40px',
            'transition':'3s'
            }).animate({
                width:'450px' ,
                height:'300px',
                transition:'3s',
                borderRadius: '10px'
            });
        $(' .login-form').slideDown(2000).css({
            'display':'block',
        });
        $("input").slideDown(3000).css('display','inline');
        $("input[type='submit']").mouseenter(function(){
            $("input[type='submit']").css({
                backgroundColor:'black',
                color:'white'
             });
        }); 
        $("input[type='submit']").mouseleave(function(){
            $("input[type='submit']").css({
                backgroundColor:'#debe87',
                color:'white'
             });
        }); 

    });
 
    /*End Login Section*/
    $('.more').click(function(){
        $('.info1').toggle();
    });
    
    var goUpButton = document.getElementById('go-up');
    window.onscroll = function(){
        'use strict';
        if(window.pageYOffset >= 1500)
            {
                goUpButton.style.display ='block';
            }
        else
            {
                goUpButton.style.display = 'none'; 
            }
    };
  
});