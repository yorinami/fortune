$(function(){
  $("#bt1").on("click",function(){
    var yourname = $("#yourname").val();
    if (yourname === ""){
      $("#name1 span").html("名前を入力してください！")
    } else {
      $("#name1").html(yourname + "さんの今日のラッキースイーツは…");
      var random = Math.floor(Math.random() * 5);
      var messages = [
        "ショートケーキです！いちごたっぷりだとなお良いことがおこるはず！",
        "チョコレートケーキです！",
        "チーズケーキです！",
        "焼きプリンです！",
        "フルーツタルトです！"
      ];
      $("#message").html(messages[random]);
      $("#main img").attr("src","./images/fortune" + random + ".jpg");
      $("#main img").animate({
          "width": "800px",
          "height": "800px",
          "opacity":"1"
      });
      $("#bt1").remove();
    }
  });
});
