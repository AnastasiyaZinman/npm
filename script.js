$('button').on('click', function(){
    var AppendData = function (data) {
      console.log(data);
      var source = $('#book-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(data);
      $('.book').append(newHTML);
    }
    var fetch = function (isbn_data) {
      $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn_data.toString(),
        success: function(data) {
        AppendData(data);
        },            
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      }); 
    };
    var isbn_data = $('input').val();
    console.log(isbn_data);
    //console.log('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ toString(isbn_data)); //0439023521
    fetch(isbn_data);
    
    })