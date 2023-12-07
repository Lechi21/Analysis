window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculatePro);
}

let myChart; //declare a global variable to hold the chart object

function calculatePro(){
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let thirdNum = document.getElementById("thirdNum").value;

    if (firstNum !== "" && secondNum !== "" && thirdNum !== ""){
        // Convert input values to numbers
        let num1 = parseFloat(firstNum);
        let num2 = parseFloat(secondNum);
        let num3 = parseFloat(thirdNum);

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            let sum = num1 + num2 + num3;
            let average = Math.floor(sum / 3); // Calculate the average without modulus operator 
            document.getElementById("resultMessage1").innerText = "You will likely get a sale of";
            let wrappedAverage = average % 101; //Use modulus operator to ensure the displayed result stays within 0-100
            document.getElementById("resultPercent").innerText = wrappedAverage + "%";
            document.getElementById("resultMessage4").innerText = "based on previous Sale";
            updateChart([num1, num2, num3, average]); //Update the chart with new data
        } else {
                document.getElementById("resultMessage2").innerText = "Please enter valid numbers";
                document.getElementById("resultPercent").innerText = "";
            }
        } else {
            document.getElementById("resultMessage3").innerText = "Please enter all numbers";
            document.getElementById("resultPercent").innerText = "";
        }
    }
            // Chart.js code to create a bar chart
            
            function updateChart(data){
                if (myChart){
                    myChart.data.datasets[0].data = data;
                    myChart.update();
            } else{
                let ctx = document.getElementById('myChart').getContext('2d');
                myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Two Month Sales', 'One Month Sales', 'Current Month Sales', 'Next Month Sales'],
                    datasets: [{
                        label: 'Values',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    plugins: {
                        title: {
                            display: true,
                            text: 'Sales',
                            color: 'black' // Change title color to black
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'black' // Change ticks color to black
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 500000
                        }
                    }
                }
            });
        } 
}