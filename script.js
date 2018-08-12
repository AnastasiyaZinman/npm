$('button').on('click', function(){
    var AppendData = function (data) {
      console.log(data);
      for (let i=0; i<10; i++){
      var source = $('#book-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(data.items[i]);
      $('.book').append(newHTML);
      }
    }
    var fetch = function (title) {
      $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+ title,
        //+ isbn_data.toString(),
        success: function(data) {
        AppendData(data);
        },            
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      }); 
    };
    var title = $('input').val();
    console.log(title);
    //console.log('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ toString(isbn_data)); //0439023521
    fetch(title);
    
    })