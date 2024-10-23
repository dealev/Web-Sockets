const graphRef = document.getElementById("graph");

const chart = new Chart(graphRef, {
    type: "bar",
    data: {
        labels: ["Green", "Red", "blue"],
        datasets: [{label: "Buttons", data: [2,1]}],
    },
});

async function getData() {
   /*  chart.destroy(); */
    chart.data = {
        labels: Object.keys(colors),
        datasets: [{label: "buttons", data: Object.values(colors)}],
    };

    const buttonReq = await fetch(`/api/button/data`);
    const buttonData = await buttonReq.json();

    const colors = {};

    for (let i = 0; i < buttonData.length; i++) {
    const buttonColor = buttonData[i];
    colors[buttonColor] ||= 0;
    colors[buttonColor]++;
    }
    chart.update();
}

getData();