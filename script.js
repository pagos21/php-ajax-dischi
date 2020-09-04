
function init(){
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var target = $("#cont");
  getMyAPI(compiled, target);
  $(document).on("click", "#btn", function(){
      target.html("");
    var val = $("#sel").val();
    if (val == "def") {
      getMyAPIfileterd(compiled, target, val);
    } else if (val == "Rock") {
      getMyAPIfileterd(compiled, target, val);
    } else if (val == "Pop") {
      getMyAPIfileterd(compiled, target, val);
    } else if (val == "Jazz") {
      getMyAPIfileterd(compiled, target, val);
    } else if (val == "Metal") {
      getMyAPIfileterd(compiled, target, val);
    }
  })

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


function getMyAPIfileterd(compiled, target, val){
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

        if (val == genreAPI) {

          var discs2html = compiled({ cover:posterAPI,
            title:titleAPI,
            author:authorAPI,
            genre:genreAPI,
            year:yearAPI

          })

          target.append(discs2html);
        }
        else if (val == "def") {
          var discs2html = compiled({ cover:posterAPI,
            title:titleAPI,
            author:authorAPI,
            genre:genreAPI,
            year:yearAPI

          })

          target.append(discs2html);
        }


      } //for

    },
    error: function(error){
      console.log(error);
    }
  })
}


function takeval(compiled, target){

}

$(document).ready(init);
