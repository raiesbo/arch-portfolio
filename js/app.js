//Prevents from IMG download

$(document).ready(function()
{
    $('img').bind('contextmenu', function(e){
        return false;
    }); 
});

/*
$("a.link_projectMenu").click(function(){
    $(".projectList").hide(500);
    $(".curriculumVitae").hide(500);
    $(".Contact").hide(500);
    $(".project").show();
  });

  $("a.link_projectList").click(function(){
    $(".project").hide(500);
    $(".projectList").show(500);
  });

  $("a.link_curriculumVitae").click(function(){
    $(".project").hide(500);
    $(".projectList").show(500);
  });

  $("a.link_Contact").click(function(){
    $(".project").hide(500);
    $(".projectList").show(500);
  });
*/
/*
var trigger = $('.navL');
var container = $('.container');
*/
/*
$(document).ready(function () {
  // Set trigger and container variables
    var trigger = $('.navL'), container = $('.container');
})

// Fire on click
trigger.on('click', function(){
  //Ser $this for re-use. Set tarfet from data attribute
  var $this = $(this),
    target = $this.data('target'); console.log(target)
  // Load target page into container
  container.load(target + ".html")
  // Stop normal link behavior
  return false;
})
*/
/*
AOS.init({
  duration: 1200,
})
*/


