$('button').on('click', function () {
  $('.book-list').empty();
  var title = $('input').val();
  //---First Checking entered title
  let check= / /g;
  if ((title.length>15)&&(!check.test(title))) {
   alert("Very long title, insert spaces");
   $('input').val = '';
  }
  
  else
  fetch(title);
  })

  var AppendData = function (data) {
    //---Second Checking entered title
    if (data.totalItems===0)
    $('.book-list').append("Can't find book with entered title.");
    else {
    var source = $('#book-template').html();
    var template = Handlebars.compile(source);
    for (let i = 0; i < 10; i++) {
    var newHTML = template(data.items[i]);
    $('.book-list').append(newHTML);
    }
  }
  }

  var fetch = function (title) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + title,
      //+ isbn_data.toString(),
      success: function (data) {
      AppendData(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  };