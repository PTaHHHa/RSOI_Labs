// $(document).ready(function(){

//     $(".article #one").click(function(){
//         // $(this).parents(".secondList").animate({ opacity: "hide" }, "slow");
//         let contentA = $('#withA').html();
//         let contentB = $('#withB').html();
//         let contentC = $('#withC').html();
//         console.log(contentA);
        
//         $(".article .secondList").animate({ opacity: "hide" }, "slow");
//         $('.a').empty();
//         $( "<h1>A</h1><ul class='aa'><li>"+contentA+"</li></ul>" ).prependTo( ".a" );
        
//         $('.b').empty();
//         $( "<h2 class='bh'>B</h2><ul><li class='bb'>"+contentB+"</li></ul>" ).prependTo( ".b" );

//         $('.c').empty();
//         $( "<h3>C</h3><ul><li>"+contentC+"</li></ul>" ).prependTo( ".c" );
//     });

// });

// $(document).ready(function(){

//     $(".article #two").click(function(){
//         let text = $(".article .firstList #list_1 .bb").text(); 
//         if(text.indexOf('good') != -1) {
//         $(".article .firstList #list_1 :nth-child(2n)").css("color","red");
//         $(".article .firstList #list_1 :odd").css("color","rgb(80, 127, 168)")
//         $(".article .firstList #list_1 .bb").css("color","red");
//         $(".article .firstList #list_1 .bh").css("color","red");
//         }

//     });

// }); 

$( document ).ajaxStart(function() {
    $( "#loading" ).show();
  });

$( document ).ajaxStop(function() {
$( "#loading" ).hide();
});

//belarus file
$(document).ready(function(){
    $(".article #one").click(function(){
        
        //ajaxSend
        $( document ).ajaxSend(function( event, request, settings ) {
            $( "#msg" ).append( "<li>Starting request at " + settings.url + "</li>" );
          }); 

        $.ajax({
            url: 'https://firebasestorage.googleapis.com/v0/b/labwork7-7bee4.appspot.com/o/Belarus.txt?alt=media&token=5afed354-7b6b-475a-bb1b-3168daf5b89a',         /* Куда пойдет запрос */
            method: 'get',             /* Метод передачи (post или get) */
            dataType: 'text',          /* Тип данных в ответе (xml, json, script, html). */
            data: {},     /* Параметры передаваемые в запросе. */
            success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                $("<h3 id='belarus_h'>Belarus</h3>").insertBefore($(".article #belarus"));
                $('.article #belarus').append(data);
                $(".article #belarus").css("color","green");
                $(".article #belarus_h").css("color","green");
            },

            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    alert('Not connect. Verify Network.');
                } else if (jqXHR.status == 404) {
                    alert('Requested page not found (404).');
                } else if (jqXHR.status == 500) {
                    alert('Internal Server Error (500).');
                } else if (exception === 'parsererror') {
                    alert('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                    alert('Time out error.');
                } else if (exception === 'abort') {
                    alert('Ajax request aborted.');
                } else {
                    alert('Uncaught Error. ' + jqXHR.responseText);
                }
            }
        });
        
    });
});

//usa file
$(document).ready(function(){
    $(".article #two").click(function(){
        $.ajax({
            url: 'https://firebasestorage.googleapis.com/v0/b/labwork7-7bee4.appspot.com/o/USA.txt?alt=media&token=9c191d7f-66e3-4e5d-945e-67c777ab3be1',         /* Куда пойдет запрос */
            method: 'get',             /* Метод передачи (post или get) */
            dataType: 'text',          /* Тип данных в ответе (xml, json, script, html). */
            data: {},     /* Параметры передаваемые в запросе. */
            success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                $("<h3 id='usa_h'>USA</h3>").insertBefore($(".article #usa"));
                $('.article #usa').append(data);
                $(".article #usa").css("color","red");
                $(".article #usa_h").css("color","red");
            },

            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    alert('Not connect. Verify Network.');
                } else if (jqXHR.status == 404) {
                    alert('Requested page not found (404).');
                } else if (jqXHR.status == 500) {
                    alert('Internal Server Error (500).');
                } else if (exception === 'parsererror') {
                    alert('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                    alert('Time out error.');
                } else if (exception === 'abort') {
                    alert('Ajax request aborted.');
                } else {
                    alert('Uncaught Error. ' + jqXHR.responseText);
                }
            }
        });
        
    });
});

//uk file
$(document).ready(function(){
    $(".article #three").click(function(){
        $.ajax({
            url: 'https://firebasestorage.googleapis.com/v0/b/labwork7-7bee4.appspot.com/o/UK.txt?alt=media&token=67c9691c-a39b-42de-ae22-050d3ae4377f',         /* Куда пойдет запрос */
            method: 'get',             /* Метод передачи (post или get) */
            dataType: 'text',          /* Тип данных в ответе (xml, json, script, html). */
            data: {},     /* Параметры передаваемые в запросе. */
            success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
                $("<h3 id='uk_h'>UK</h3>").insertBefore($(".article #uk"));
                $('.article #uk').append(data);
                $(".article #uk").css("color","blue");
                $(".article #uk_h").css("color","blue");
            },

            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    alert('Not connect. Verify Network.');
                } else if (jqXHR.status == 404) {
                    alert('Requested page not found (404).');
                } else if (jqXHR.status == 500) {
                    alert('Internal Server Error (500).');
                } else if (exception === 'parsererror') {
                    alert('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                    alert('Time out error.');
                } else if (exception === 'abort') {
                    alert('Ajax request aborted.');
                } else {
                    alert('Uncaught Error. ' + jqXHR.responseText);
                }
            }
        });
        
    });
});

//aditional file
$(document).ready(function(){
    $(".article #aditional").click(function(){
        $.ajax({
            url: 'https://firebasestorage.googleapis.com/v0/b/labwork7-7bee4.appspot.com/o/aditional.json?alt=media&token=92f9df0a-88fd-4f6c-8c9e-0fbe3f0b9634',         /* Куда пойдет запрос */
            method: 'get',            
            dataType: 'json',        
            data: {},    
            success: function(data){ 
                console.log(data.urls[0])
                console.log(data.urls[1])
                console.log(data.urls[2])
                $( "<br><img src='"+ data.urls[0]+"' alt='belarus'>" ).insertAfter( "#belarus_h" );
                $( "<br><img src='"+ data.urls[0]+"' alt='usa'>" ).insertAfter( "#usa_h" );
                $( "<br><img src='"+ data.urls[0]+"' alt='uk'>" ).insertAfter( "#uk_h" );
            },

            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    alert('Not connect. Verify Network.');
                } else if (jqXHR.status == 404) {
                    alert('Requested page not found (404).');
                } else if (jqXHR.status == 500) {
                    alert('Internal Server Error (500).');
                } else if (exception === 'parsererror') {
                    alert('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                    alert('Time out error.');
                } else if (exception === 'abort') {
                    alert('Ajax request aborted.');
                } else {
                    alert('Uncaught Error. ' + jqXHR.responseText);
                }
            }
        });
        
        $( document ).ajaxComplete(function() {
            $( "#msg_finish" ).text( "Finish ajaxComplete !" );
          });
    });
});
