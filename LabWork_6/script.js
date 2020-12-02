$(document).ready(function(){

    $(".article #one").click(function(){
        // $(this).parents(".secondList").animate({ opacity: "hide" }, "slow");
        let contentA = $('#withA').html();
        let contentB = $('#withB').html();
        let contentC = $('#withC').html();
        console.log(contentA);
        
        $(".article .secondList").animate({ opacity: "hide" }, "slow");
        $('.a').empty();
        $( "<h1>A</h1><ul class='aa'><li>"+contentA+"</li></ul>" ).prependTo( ".a" );
        
        $('.b').empty();
        $( "<h2 class='bh'>B</h2><ul><li class='bb'>"+contentB+"</li></ul>" ).prependTo( ".b" );

        $('.c').empty();
        $( "<h3>C</h3><ul><li>"+contentC+"</li></ul>" ).prependTo( ".c" );
    });

});

$(document).ready(function(){

    $(".article #two").click(function(){
        let text = $(".article .firstList #list_1 .bb").text(); 
        if(text.indexOf('good') != -1) {
        $(".article .firstList #list_1 :nth-child(2n)").css("color","red");
        $(".article .firstList #list_1 :odd").css("color","rgb(80, 127, 168)")
        $(".article .firstList #list_1 .bb").css("color","red");
        $(".article .firstList #list_1 .bh").css("color","red");
        }

    });

}); 
