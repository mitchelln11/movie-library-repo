
(function($){
    
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value,
        };

        // $.ajax({
        // url: 'https://localhost:44352/api/movie',
        //     dataType: 'json',
        //     type: 'post',
        //     contentType: 'application/json',
        //     data: JSON.stringify(dict),
        //     success: function( data ){
        //         WriteToTable(data);
        //     },
        //     error: function( jqXhr, textStatus, errorThrown ){
        //         console.log( errorThrown );
        //     },
        // });

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
    $('#my-form').submit( postform );
    $('#my-otherform').submit( processForm );
      


    
    function WriteToTable(data){
        var result = "<table><th>Title</th><th>Director</th><th>Genre</th>";
            $.each( data, function( index, record ) {
                result += "<tr><td>" + record.Title + "</td><td>" + record.Director + "</td><td>" + record.Genre + "</td></tr>"
            });
            result += "</table>"
            $("#response pre").html(result);
        }

})(jQuery);

