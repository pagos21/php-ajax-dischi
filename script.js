
function init(){
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var target = $("#cont");
  getMyAPI(compiled, target);
};


function getMyAPI(compiled, target){
  $.ajax({
    url: "index.php",
    method: "GET",
    data: {},
    success: function(data, state){
      var fromAPI = data['response'];
      for (var i = 0; i < fromAPI.length; i++) {
        var posterAPI = fromAPI[i].poster;
        var titleAPI = fromAPI[i].title;
        var authorAPI = fromAPI[i].author;
        var genreAPI = fromAPI[i].genre;
        var yearAPI = fromAPI[i].year;

        var discs2html = compiled({ cover:posterAPI,
                                    title:titleAPI,
                                    author:authorAPI,
                                    genre:genreAPI,
                                    year:yearAPI

        })
        target.append(discs2html);
      } //for

    },
    error: function(error){
      console.log(error);
    }
  })
}

$(document).ready(init);
