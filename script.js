function compute() {
    var principal = document.getElementById("principal").value;
    if (parseFloat(principal) <= 0){
        alert("Enter a positive number.")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var resultString = (`If you deposit <span class='highlight'>${principal}</span>, \n
    at an interest rate of <span class='highlight'>${rate}%</span> . \n
    You will receive an amount of <span class='highlight'>${parseFloat(interest)}</span> , \n
    in the year <span class='highlight'>${year}s</span> `)
    document.getElementById("result").innerHTML = resultString;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + ".00%";
}
