var http = require('https');
getAjaxWithNode();
function getAjaxWithNode() {
    return http.get("https://www.googleapis.com/books/v1/volumes?q=donut", function(response) {
        // Continuously update stream with data (Node adress this a stream of data -  just assume the collecting the data take some time
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(body);
        });
    });
}