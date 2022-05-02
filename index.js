// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", match)
var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];
 function match(){
  event.preventDefault();
  var matchobj={
    matchNum:document.querySelector("#matchNum").value,
    teamA :masaiForm.teamA.value,
    teamB :masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
  }
  matchArr.push(matchobj);
  console.log(matchArr)
  localStorage.setItem("schedule", JSON.stringify(matchArr));
}
