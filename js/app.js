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

