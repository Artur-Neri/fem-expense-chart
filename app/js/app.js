const graph = document.querySelector('#graph');
const days = document.querySelector('#days');
const data = fetch('/data.json').then(response => response.json())
.then(converted => 
  populateGraph(converted)
);

function populateGraph(arr) {
  let max = arr[0].amount;
  arr.forEach(day => {
    if (day.amount > max) {
      max = day.amount;
    }
  });
  arr.forEach(day => {
    let percentatge = getPercentage(max, day.amount);
    if(percentatge == 100.00){
        graph.innerHTML += `
      <div class="day" id="max" style="height:${percentatge}%"><span class="graph__amount">$${day.amount}</span></div>
      `
    } else {
      graph.innerHTML += `
      <div class="day" style="height:${percentatge}%"><span class="graph__amount">$${day.amount}</span</div>
      `
    }
    days.innerHTML += `<p>${day.day}</p>`
  });
}

function getPercentage(max, value){
  return ((100*value)/max).toFixed(2);
}
