// write js code here corresponding to favourites.html

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
     td6.innerText="Remove";
     td6.setAttribute("class", "pointer")
     td6.addEventListener("click", function (){
       remove(el, index);
     });
     

    tr.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("tbody").append(tr);
   })
 }
function  remove(el, index){
  event.target.parentNode.remove();
  matchArr.splice (index, 1)
  matchArr.push(el)
  console.log(matchArr)
localStorage.setItem("schedule", JSON.stringify(matchArr))
// window.location.reload()
}

