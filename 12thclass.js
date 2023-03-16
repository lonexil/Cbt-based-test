let display=document.getElementById("quizz")
// let display2=document.getElementById("header")
let scorr
let indexx=0; 
let timerr=40;
let show;
let myquestions=[
    {
      question:"who invented javascript?",
      options:[
        "DOUGLAS CROCKFORD",
         "Sheryl Sandberg",
         "Brendan Eitch"
      ],
      chosen:'',
      answer:"Brendan Eitch",
    },
    {
        question:"which one of this is a javascript package manager",
        options:["Node js","Type script","npm" ],
       chosen:'',
        answer:"npm"
    },
    {
        question:"which tool can you use to ensure code quality?",
        options:["Angular","JQuery","Require","Eslint"],
        chosen:'',
        answer:"Eslint"
    },
    {
        question:"who is the President of Nigeria?",
        options:['Ibrahim salako',"kareem ojo","Ahmed Tinubu"],
       chosen:"",
        answer:"Ahmed Tinubu"
    },
   
    {
      question:"Which country developed the first DNA vaccine for dengue?",
      options:["Australia",
                 "India",
              "Netherlands"],
              chosen:"",
              answer:"India"
    }
]
let testtime;
// 
 function downy() {
   if (timerr >= 0) {
     document.getElementById("timmer").innerHTML = timerr;
    //  setTimeout(downy, 1000);
   }
   else{
    clearInterval(testtime);
    submit();
   }
   timerr --;
  //  testtime=setTimeout(downy,1000)
 }  
 function displays(){
   display.innerHTML = `<h1>${myquestions[indexx].question}</h1>`
       myquestions[indexx].options.forEach(function (params, i) {
      display.innerHTML += ` <input type="radio" name="answer" ${
        myquestions[indexx].chosen == params ? "checked" : ""
      } onclick="answer('${params}')">${params}</input><br>`;
    });

       display.innerHTML+=`<button class="btn-danger" onclick="previous()">previous</button>
       <button class="btn-danger" onclick="next()">next</button>
       <button class="btn-danger"onclick="submit()">submit</button>
      `
       btn.style.display="none"
       
    //    <input type="checkbox">${myquestions[i].options[0]}</input>`;
    
 }
function start(){
  // downy()
    testtime=setInterval(downy,1000)
    displays()
  //  display.innerHTML = `<h1>${myquestions[indexx].question}</h1>`
  //      myquestions[indexx].options.forEach(function (params, i) {
  //     display.innerHTML += ` <input type="radio" name="answer" ${
  //       myquestions[indexx].chosen == params ? "checked" : ""
  //     } onclick="answer('${params}')">${params}</input><br>`;
  //   });

  //      display.innerHTML+=`<button class="btn-danger" onclick="previous()">previous</button>
  //      <button class="btn-danger" onclick="next()">next</button>
  //      <button class="btn-danger"onclick="submit()">submit</button>
  //     `
  //      btn.style.display="none"
  //   //    <input type="checkbox">${myquestions[i].options[0]}</input>`;
    
   show=display.innerHTML
   
}
 function next(){
      if(myquestions[indexx+1]){
        indexx++
         displays();
      }
        else{
         displays();
        }
      
     
        // indexx++
        // start();
    
    // indexx++
    // start();

    // display.innerHTML=`<h1>${myquestions[indexx++].question}<br>
    //        <input type="radio" name='yes'>${myquestions[indexx++].options[0]}</input><br>
    //    <input type="radio" name='yes'>${myquestions[indexx++].options[1]}</input> <br>
    //    <input type="radio" name='yes'>${myquestions[indexx++].options[2]}</input>;<br> <br>
    //           <button class="btn-danger" onclick="previous()">previous</button>
    //    <button class="btn-danger" onclick="next()">next</button>
    //    <button class="btn-danger"onclick="submit()">submit</button>`
}
function previous(){
         if (myquestions[indexx-1]) {
           indexx--;
           start();
         } else start();
      
}

function answer(p) {
    myquestions[indexx].chosen = p;
    console.log(myquestions[indexx]);
    
}
let result;
function submit(){
    result=myquestions.filter(function(eleme){
        return eleme.answer==eleme.chosen
    })
     console.log(result)
     display.innerHTML = `<h1>You scored ${result.length}/${myquestions.length}✔</h1>
     <h2>${(result.length / myquestions.length) * 100} % </h2> 
 <button class="btn-light" onclick="transcript()">see answer</button>`
 clearTimeout(testtime)
    //  display.innerHTML=`<h2>your percentage is${result.length/myquestions.length}*100`; 
} 
function transcript(){
  myquestions.forEach(function(element)
  {
    clearTimeout(testtime)
    // display.innerHTML="";
  table.innerHTML+=`
  <tr>
  <td>${element.question}</td>
  <td>${element.answer}</td>
  <td>${element.chosen}</td>
  
  </tr>`
  
  })
  
}
// setInterval(countdown,60000)
// function countdown(){
// //    if(display1.value==0){
// //     clearInterval(display1.value)
// //    }else{
// //     display1.value--
// //    }
//     // display1.value--;
// }
// countdown();