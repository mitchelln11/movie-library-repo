(function($){
    
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
            //contentType: 'application/json',
            //data: JSON.stringify(dict),
            success: function(data){
               WriteToTable(data)
            },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
        });
        e.preventDefault();
        //$.post('api/movie', { "": [e.title, e.director, e.genre] });
    }
    $('#my-form').submit( processForm );

    
    function WriteToTable(data){
        var result = "<table><th>Title</th><th>Director</th><th>Genre</th>";
            $.each( data, function( index, record ) {
                result += "<tr><td>" + record.title + "</td><td>" + record.director + "</td><td>" + record.genre + "</td></tr>"
            });
            result += "</table>"
            $("#response pre").html(result);
        }

})(jQuery);