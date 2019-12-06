
(function($){

    //$('#full-table pre').submit( loadForm );
    $( "#all-movies" ).click(function() {
        // var dict = {
        // 	Title : this["title"].value,
        //     Director: this["director"].value,
        //     Genre: this["genre"].value,
        // };
        function loadForm( e ){
            $.ajax({
                url: 'https://localhost:44352/api/movie',
                dataType: 'json',
                type: 'POST',
                data: JSON.stringify(dict),
                //data: JSON.stringify({Title: $(this["title"]).val(), Director: $(this["director"]).val(), Genre: $(this["genre"]).val(),
                // data: {
                //     Title : this["title"].value,
                //     Director: this["director"].value,
                //     Genre: this["genre"].value,
                // },
                success: function(data){
                DisplayFullTable(data);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
            e.preventDefault();
        }
        //$("#full-table pre").html(result);
        $('#all-movies').click( loadForm() )
    });


    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',

            type: 'GET',
            success: function(data){
               WriteToTable(data)

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });                   
        e.preventDefault();
    }
    function postform( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
        };

        $.ajax({
        url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data ){
                alert("Successfully added!");
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
        });               
        e.preventDefault();
    }
    function getbyidform( e ){

        var MovieId = $('#id-field').val();
        
        
        $.ajax({
        url: 'https://localhost:44352/api/movie/'+MovieId,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',          
            success: function( data ){
                $("#response pre").html("<p>" + data.Title + " " + data.Director + " " + data.Genre+"</p>");

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            },
        });               
        e.preventDefault();
    }


    $('#my-form').submit( postform );
    $('#my-otherform').submit( processForm );
    $('#my-getwithparamaterform').submit( getbyidform); 

    function WriteToTable(data){
        var result = "<table><th>ID</th><th>Title</th><th>Director</th><th>Genre</th>";
            $.each( data, function( index, record ) {
                result += "<tr><td>" + record.MovieId + "</td><td>" + record.Title + "</td><td>" + record.Director + "</td><td>" + record.Genre + "</td></tr>"
            });
            result += "</table>"
            $("#response pre").html(result);
        }        

})(jQuery);

