function get_details(){
  var button = document.getElementById("button");

  var spinner = document.getElementById("spinner");

  button.style.display = "none";
  spinner.style.display = "block";

  var get_num = document.getElementById("number").value
  var kural_chapter  = document.getElementById("kural_chap");
  var chapter  = document.getElementById("chap");
  var chapter_group_english  = document.getElementById("chapgrp_eng");
  var chapter_group_tamil  = document.getElementById("chapgrp_tamil");
  var english_meaning = document.getElementById("english");
  var english_explanation = document.getElementById("english_exp");
  var line_1 = document.getElementById("line_1");
  var line_2 = document.getElementById("line_2");
  var kural_section_english = document.getElementById("kural_section_eng");
  var kural_section_tamil = document.getElementById("kural_section_tam");
  var tamil_Explanation = document.getElementById("tam_exp");

  setTimeout(async function(){
    try{
      var responce = await fetch(`https://api-thirukkural.vercel.app/api?num=${get_num}`);
      var data = await responce.json();

      button.style.display = "block";
      spinner.style.display = "none";

      kural_chapter.value = data.chap_eng;
      chapter.value = data.chap_tam;
      chapter_group_english.value = data.chapgrp_eng;
      chapter_group_tamil.value = data.chapgrp_tam;
      english_meaning.value = data.eng;
      english_explanation.value = data.eng_exp;
      line_1.value = data.line1;
      line_2.value = data.line2;
      kural_section_english.value = data.sect_eng;
      kural_section_tamil.value = data.sect_tam;
      tamil_Explanation.value = data.tam_exp;
  }catch{
    alert("Enter the valid number ");
    spinner.style.display="none";
    button.style.display="block";
  }

  },1000)
}