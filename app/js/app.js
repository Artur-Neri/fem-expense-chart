// import data from '/data.json' assert { type: 'json' };
const graph = document.querySelector('#graph');
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
    console.log(percentatge)
    if(percentatge == 100.00){
        graph.innerHTML += `
      <div class="day ${day.day}" style="height:${percentatge}%;background-color:var(--color-cyan)"></div>
      `
    } else {
      graph.innerHTML += `
      <div class="day ${day.day}" style="height:${percentatge}%"></div>
      `
    }
  });
}

function getPercentage(max, value){
  return ((100*value)/max).toFixed(2);
}
