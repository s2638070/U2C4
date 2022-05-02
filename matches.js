// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"))
//  console.log(matchArr)
 display(matchArr)
 var matchArr=JSON.parse(localStorage.getItem("schedule"))||[];
 function display(matchArr){
   matchArr.forEach(function(el, index){
     var tr= document.createElement("tr")

     var td1= document.createElement("td");
          td1.innerText=el. matchNum;
     var td2= document.createElement("td");
     td2.innerText=el. teamA;
     var td3= document.createElement("td");
     td3.innerText=el. teamB;
     var td4= document.createElement("td");
     td4.innerText=el.date;
     var td5= document.createElement("td");
     td5.innerText=el. venue;
     var td6= document.createElement("td");
     td6.innerText="Add Favourite";
     td6.setAttribute("class", "pointer")
     td6.addEventListener("click", function (){
       favourite(el);
     });
     

    tr.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("tbody").append(tr);
   })
 }
function  favourite(el){
  
  matchArr.push(el)
  console.log(matchArr)
localStorage.setItem("schedule", JSON.stringify(matchArr))
}
