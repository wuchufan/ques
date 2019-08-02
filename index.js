console.log($('h2').html());
var marriageStatus = 2; // 2 is singled, 1 is married
var totalScore = new Array(2);
var ageScore = new Array(21);
var eduScore = new Array(8);
var cWorkingExp = new Array (6);
var lang1LiScore = new Array(10);
var lang1SpScore = new Array(8);
var lang1ReScore = new Array(11);
var lang1WrScore = new Array(9);
var bonusScore1 = new Array(3);
var bonusScore2 = new Array(3);
var bonusScore3 = new Array(2);
var spoEduScore = new Array(8);
var spoCWorkExp = new Array(6);
var age = 0;

var spoLangLiScore = new Array(9);
var spoLangSpScore = new Array(7);
var spoLangReScore = new Array(10);
var spoLangWrScore = new Array(7);


var sectionAScore = new Array(2);
var sectionBScore = new Array(2);
var sectionCScore = new Array(1);
var sectionDScore = new Array(2);
ageScore[0] = new Array(0,0,0);
ageScore[1] = new Array(18,90,99);
ageScore[2] = new Array(19,95,105);
ageScore[3] = new Array(20,100,110);
ageScore[4] = new Array(30,95,105);
ageScore[5] = new Array(31,90,99);
ageScore[6] = new Array(32,85,94);
ageScore[7] = new Array(33,80,88);
ageScore[8] = new Array(34,75,83);
ageScore[9] = new Array(35,70,77);
ageScore[10] = new Array(36,65,72);
ageScore[11] = new Array(37,60,66);
ageScore[12] = new Array(38,55,61);
ageScore[13] = new Array(39,50,55);
ageScore[14] = new Array(40,45,50);
ageScore[15] = new Array(41,35,39);
ageScore[16] = new Array(42,25,28);
ageScore[17] = new Array(43,15,17);
ageScore[18] = new Array(44,5,6);
ageScore[19] = new Array(45,0,0);
ageScore[20] = new Array(130,0,0);

eduScore[0] = new Array(0,0);
eduScore[1] = new Array (28,30);
eduScore[2] = new Array (84,90);
eduScore[3]= new Array(91,98);
eduScore[4]= new Array (112,120);
eduScore[5]=new Array(119,128);
eduScore[6]= new Array (126,135);
eduScore[7] = new Array(140,150);


cWorkingExp[0]= new Array(0,0);
cWorkingExp[1] = new Array(35,40);
cWorkingExp[2] = new Array(46,53);
cWorkingExp[3] = new Array(56,64);
cWorkingExp[4] = new Array(63,72);
cWorkingExp[5] = new Array(70,80);

lang1LiScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1LiScore[1] = new Array(6,6); //4.5
lang1LiScore[2] = new Array(6,6); //5
lang1LiScore[3] = new Array(8,9); //5.5
lang1LiScore[4] = new Array(16,17); //6
lang1LiScore[5] = lang1LiScore[4]; //6.5
lang1LiScore[6] = lang1LiScore[4]; //7
lang1LiScore[7] = new Array(22,23); //7.5
lang1LiScore[8] = new Array (29,31);//8
lang1LiScore [9] = new Array (32,34);//8.5+

lang1ReScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1ReScore[1] = new Array(6,6); //3.5
lang1ReScore[2] = new Array(6,6); //4
lang1ReScore[3] = new Array(6,6); //4.5
lang1ReScore[4] = new Array(8,9); //5
lang1ReScore[5] = new Array(8,9); //5.5
lang1ReScore[6] = new Array(16,17); //6
lang1ReScore[7] = new Array(22,23); //6.5
lang1ReScore[8] = new Array(29,31); //7
lang1ReScore[9] = new Array(29,31); //7.5
lang1ReScore[10] = new Array(32,34); //8+

lang1SpScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1SpScore[1] = new Array(6,6); //
lang1SpScore[2] = new Array(6,6); //
lang1SpScore[3] = new Array(8,9); //
lang1SpScore[4] = new Array(16,17); //
lang1SpScore[5] = new Array (22,23); //
lang1SpScore[6] = new Array(29,31); //
lang1SpScore[7] = new Array(32,34); //

lang1WrScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1WrScore[1] = new Array(6,6); //4
lang1WrScore[2] = lang1WrScore[1]; //4.5
lang1WrScore[3] = new Array(6,6); //5
lang1WrScore[4] = new Array(8,9); //5.5
lang1WrScore[5] = new Array (16,17); //6
lang1WrScore[6] = new Array(22,23); //6.5
lang1WrScore[7] = new Array(29,31); //7
lang1WrScore[8] = new Array (32,34);//7.5+

spoEduScore[0] =0;
spoEduScore[1] =2;
spoEduScore[2] =6;
spoEduScore[3] =7;
spoEduScore[4] =8;
spoEduScore[5] =9;
spoEduScore[6] =10;
spoEduScore[7] =10;

spoCWorkExp[0] =0;
spoCWorkExp[1] =5;
spoCWorkExp[2] =7;
spoCWorkExp[3] =8;
spoCWorkExp[4] =9;
spoCWorkExp[5] =10;


spoLangLiScore[0] = 0;
spoLangLiScore[1] = 1; //5
spoLangLiScore[2] = spoLangLiScore[1]; //5.5
spoLangLiScore[3] = 3; //6
spoLangLiScore[4] = spoLangLiScore[3]; //6.5
spoLangLiScore[5] = spoLangLiScore[4]; //7
spoLangLiScore[6] = spoLangLiScore[5]; //7.5
spoLangLiScore[7] = 5; //8
spoLangLiScore[8] = spoLangLiScore[7]; //8.5+

spoLangReScore[0] = 0;
spoLangReScore[1] = 1; //4
spoLangReScore[2] =spoLangReScore[1];//4.5
spoLangReScore[3] =spoLangReScore[2];//5
spoLangReScore[4] =spoLangReScore[3];//5.5
spoLangReScore[5] =3; //6
spoLangReScore[6] =spoLangReScore[5]; //6.5
spoLangReScore[7] =5; //7
spoLangReScore[8] =spoLangReScore[7]; //7.5
spoLangReScore[9] =spoLangReScore[8];//8+

spoLangSpScore[0] = 0;
spoLangSpScore[1] = 1;//5
spoLangSpScore[2] = 1;//5.5
spoLangSpScore[3] = 3;//6
spoLangSpScore[4] = 3;//6.5
spoLangSpScore[5] = 5;//7
spoLangSpScore[6] = 5;//7.5+

spoLangWrScore[0] = 0;
spoLangWrScore[1] = 1;//5
spoLangWrScore[2] = 1;//5.5
spoLangWrScore[3] = 3;//6
spoLangWrScore[4] = 3;//6.5
spoLangWrScore[5] = 5;//7
spoLangWrScore[6] =5;//7.5+

bonusScore1[0] = 0;
bonusScore1[1] =15;
bonusScore1[2] =30;

bonusScore2[0] =0;
bonusScore2[1] =200;
bonusScore2[2] = 50;

bonusScore3[0] = 0;
bonusScore3[1] = 600;



//Section A
$("[name='ques-s01']").click(function(){
  var statusCheck = $(this).val();
  console.log(statusCheck);
  if (statusCheck == 'married') {
    marriageStatus  = 1;
    $(".section-b").fadeIn();

  } else if (statusCheck == 'singled') {
    marriageStatus = 2;
    $(".section-b").fadeOut();
  }
  updateScores();
});

$("#ques-sa1").change(function(){
  age = $(this).val();
  updateScores();


});


$("#q1b").change(function(){
  updateScores();
});

$('#q1e').change(function(){
  updateScores();
});

$(".qlang1").change(function(){
  updateScores();

});

//Section B
$("#q2a").change(function(){
  updateScores();
});

$("#q2b").change(function(){
  updateScores();
});

$(".qspolang").change(function(){
  updateScores();
});

//Section C
$("#ques-sc1").change(function(){
  updateScores();
});

$("#ques-sc2").change(function(){
  updateScores();
});


//Section D
$("#bonus-edu").change(function(){
  updateScores();
});

$("#bonus-offer").change(function(){
  updateScores();
});

$("#bonus-prov").change(function(){
  updateScores();
});





//----------------------------------------------- The followings are function for calculations ------------------------------------------------------------------
function updateScores(){
  var sectionAScore = updateSectionAScore();
  var sectionBScore = updateSectionBScore();
  var sectionCScore = updateSectionCScore();
  var sectionDScore = updateSectionDScore();
  var totalScore = sectionAScore + sectionCScore +sectionDScore + sectionBScore;
  if (marriageStatus ==1){
    $("#final-result").text(totalScore);
  } else{
    $("#final-result").text(totalScore - sectionBScore);
  }

}

function updateSectionAScore (){
  var ageResult = updateAgeScore();
  var eduResult = updateEduScore();
  var cWorkingExpResult = updateCWorkingEXP();
  var totalLang1ScoreResult = updateTotalLang1Score();

  $("#section-a-result").text(ageResult + eduResult + cWorkingExpResult+totalLang1ScoreResult);
  return ageResult + eduResult + cWorkingExpResult+totalLang1ScoreResult;
}
function updateSectionBScore(){
  var spoCWorkExpResult = updateSpoCWorkExpScore();
  var spoEduResult = updateSpoEduScore();
  var spoTotalLangResult = updateSpoTotalLangScore();
  // console.log(spoCWorkExpResult);
  $("#section-b-result").text(spoCWorkExpResult + spoEduResult + spoTotalLangResult);

  return spoCWorkExpResult + spoEduResult + spoTotalLangResult;
}

function updateSectionCScore(){
  var mixedResult = updateMixedScores();
  // console.log("mixedResult is :"+ mixedResult);
  $("#section-c-result").text(mixedResult);
  return mixedResult;
}

function updateSectionDScore(){
  var bonusEduResult = updateBonusEdu();
  var bonusOfferResult = updateBonusOffer();
  var bonusProvResult = updateBonusProv();

  $("#section-d-result").text(bonusEduResult+bonusOfferResult+bonusProvResult);
  return bonusEduResult+bonusOfferResult+bonusProvResult;
}
//Section A
function updateAgeScore(){
  var index = 0;
  var result;
  while(index < ageScore.length){
    if (age >= ageScore[index][0]){
      if (age < ageScore[index+1][0]){


        result = ageScore[index][marriageStatus];
      } else if (age == ageScore[index+1][0]){
        result = ageScore[index+1][marriageStatus];
      }

    } index++;

  }
  $("#age-score-result").text(result);
  return result;
}

function updateEduScore(){
  var optionValue = $("#q1b").val();
  $("#edu-score-result").text(eduScore[optionValue][marriageStatus-1]);
  return eduScore[optionValue][marriageStatus-1];
}

function updateCWorkingEXP(){
  var optionValue = $("#q1e").val();
  $("#cworkexp-score-result").text(cWorkingExp[optionValue][marriageStatus-1]);
  return cWorkingExp[optionValue][marriageStatus-1];
}

function updateTotalLang1Score(){
  var lang1LiScore = updateLangLi1Score();
  var lang1ReScore = updateLangRe1Score();
  var lang1SpScore = updateLangSp1Score();
  var lang1WrScore = updateLangWr1Score();
  var totalLang1Score = lang1LiScore+lang1ReScore+lang1SpScore+lang1WrScore;
  $("#lang1-score-result").text(totalLang1Score);
  return totalLang1Score;

}
//update individual lang1 score functions：
function updateLangLi1Score(){
  var optionValue = $("#qlangli1").val();
  // console.log(optionValue);
  return lang1LiScore[optionValue][marriageStatus-1];
}
function updateLangSp1Score(){
  var optionValue = $("#qlangsp1").val();
  return lang1SpScore[optionValue][marriageStatus-1];
}
function updateLangRe1Score(){
  var optionValue = $("#qlangre1").val();
  // console.log(marriageStatus);
  return lang1ReScore[optionValue][marriageStatus-1];
}
function updateLangWr1Score(){
  var optionValue = $("#qlangwr1").val();
  return lang1WrScore[optionValue][marriageStatus-1];
}

//Section B
function updateSpoEduScore(){
  var optionValue = $("#q2a").val();
  return spoEduScore[optionValue];
}

function updateSpoCWorkExpScore(){
  var optionValue = $("#q2b").val();
  return spoCWorkExp[optionValue];
}

function updateSpoTotalLangScore(){
  var lang1LiScore = updateSpoLangLiScore();
  var lang1ReScore = updateSpoLangReScore();
  var lang1SpScore = updateSpoLangSpScore();
  var lang1WrScore = updateSpoLangWrScore();
  var totalLang1Score = lang1LiScore+lang1ReScore+lang1SpScore+lang1WrScore;
  return totalLang1Score;
}

function updateSpoLangLiScore(){
  var optionValue = $("#q2langli").val();
  return spoLangLiScore[optionValue];
}
function updateSpoLangReScore(){
  var optionValue = $("#q2langre").val();
  return spoLangReScore[optionValue];
}
function updateSpoLangSpScore(){
  var optionValue = $("#q2langsp").val();
  return spoLangSpScore[optionValue];
}
function updateSpoLangWrScore(){
  var optionValue = $("#q2langwr").val();
  return spoLangWrScore[optionValue];
}


//Section C
function updateMixedScores(){
  var optionValueEdu = $("#q1b").val();
  var optionValueFgnWorkExp = $("#ques-sc1").val();
  var optionValueCWorkExp = $("#q1e").val();
  var optionValueSkillCre = $("#ques-sc2").val();
  var optionValueLi = $("#qlangli1").val();
  var optionValueSp = $("#qlangsp1").val();
  var optionValueRe = $("#qlangre1").val();
  var optionValueWr = $("#qlangwr1").val();
  var sectionScore = [[0,0],[0,0],[0]];
  var sectionTotalScore = 0;
  //first column:
  // console.log("first column: " +optionValueLi, optionValueSp, optionValueRe, optionValueWr, optionValueEdu);
  if (optionValueLi >= 4 && optionValueSp >= 4 && optionValueRe >= 6 && optionValueWr >= 5 && optionValueEdu >1){ //if at least All CLB7+ and at least have higher education
    if (optionValueLi >= 8 && optionValueSp >= 6 && optionValueRe >= 8 && optionValueWr >= 7 ){ //if ALL CLB 9+
      if (optionValueEdu >= 5){ //if have highest level education
        sectionScore[0][0] = 50;
      } else {
        sectionScore [0][0] = 25;
      }
    } else{ // if ALL CLB7+
      if (optionValueEdu >= 5){ //if highest edu
        sectionScore[0][0] = 25;
      } else {
        sectionScore[0][0] = 13;
      }

    }
  }
  $("#c-section1").text(sectionScore[0][0]);
  // second column:
  if (optionValueCWorkExp >= 1 && optionValueEdu >1){ //at least have 1 year of c-experience AND at least higher edu
    if (optionValueCWorkExp >= 2){ // if exp higher than or equal to 2 years
      if (optionValueEdu >=5){ // if have highest education
        sectionScore[0][1] =50;
      } else {
        sectionScore[0][1] =25;
      }
    } else { //1 year exp
      if (optionValueEdu >= 5){
        sectionScore[0][1] =25;
      } else {
        sectionScore[0][1] =13;
      }
    }
  }
  $("#c-section2").text(sectionScore[0][1]);
  // third column:
  // console.log("third column :" + optionValueFgnWorkExp, optionValueLi, optionValueSp, optionValueRe ,optionValueWr);
  if (optionValueFgnWorkExp >= 1 && optionValueLi >= 4 && optionValueSp >= 4 && optionValueRe >= 6 && optionValueWr >= 5){
    if (optionValueLi >= 8 && optionValueSp >= 6 && optionValueRe >= 8 && optionValueWr >= 7 ){
      if (optionValueFgnWorkExp == 2){
        sectionScore[1][0] =50;
      } else {
        sectionScore[1][0] = 25;
      }
    } else {
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][0] = 13;
      } else {
        sectionScore[1][0] =25;
      }
    }
  }
  $("#c-section3").text(sectionScore[1][0]);
  // fourth column:
  if (optionValueCWorkExp >= 1 && optionValueFgnWorkExp >=1){
    if (optionValueCWorkExp >=2){
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][1] = 25;
      } else {
        sectionScore [1][1] =50;
      }
    } else{
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][1] =13;

      } else{
        sectionScore [1][1]= 25;
      }
    }
  }
  $("#c-section4").text(sectionScore[1][1]);
  //Skill-Cre column:
  if (optionValueLi >= 2 && optionValueSp >= 2 && optionValueRe >= 2 && optionValueWr >= 3 && optionValueSkillCre == 1){
    if (optionValueLi >= 4 && optionValueSp >= 4 && optionValueRe >= 6 && optionValueWr >= 5){
      sectionScore[2][0]=50;
    } else if ( optionValueLi >= 4 || optionValueSp >= 4 || optionValueRe >= 6 || optionValueWr >= 5){
      sectionScore[2][0]=25;
    }
  }
  $("#c-section5").text(sectionScore[2]);
  // console.log(sectionScore[2])
  // console.log(optionValueLi , optionValueSp , optionValueRe , optionValueWr);

  //update total scores:
  var sectionCalculatedScore =[0,0,0];
  for (i= 0; i < sectionScore.length;i++){
    // console.log("i is: "+i)
    // console.log("section[i].length: "+sectionScore[i].length);
    for (j=0; j< sectionScore[i].length;j++){
      // console.log("j is :"+j)
      sectionCalculatedScore[i] +=sectionScore[i][j];
    }
    if (sectionCalculatedScore[i] > 50){
      sectionCalculatedScore[i] = 50;
    }

    sectionTotalScore += sectionCalculatedScore[i];
  }
  if (sectionTotalScore > 100){
    sectionTotalScore = 100;
  }
  console.log("sectionTotalScore:" + sectionTotalScore);
  return sectionTotalScore;
}





//Section D

function updateBonusEdu(){
  var optionValue = $("#bonus-edu").val();
  return bonusScore1[optionValue];
}

function updateBonusOffer(){
  var optionValue = $("#bonus-offer").val();
  return bonusScore2[optionValue];
}

function updateBonusProv(){
  var optionValue = $("#bonus-prov").val();
  return bonusScore3[optionValue];
}
