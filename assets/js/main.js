
let body = { size: 0, age: 0, weight: 0, female: true, activity: 0, baseKcal: 0, totalKcal: 0, baseKj: 0, totalKj: 0 };

function readInput() {
    body.size = Number(document.getElementById("size").value);
    body.age = Number(document.getElementById("age").value);
    body.weight = Number(document.getElementById("weight").value);
    if (document.getElementById("female").checked) {
        body.female = true;
    } else if (document.getElementById("male").checked) {
        body.female = false;
    }
    body.activity = document.getElementById("activity").value;
}

function writeOutput() {
    document.getElementById("baseRateKcal").innerHTML = body.baseKcal.toFixed(1);
    document.getElementById("totalRateKcal").innerHTML = body.totalKcal.toFixed(1);
    document.getElementById("baseRateKj").innerHTML = body.baseKj.toFixed(1);
    document.getElementById("totalRateKj").innerHTML = body.totalKj.toFixed(1);
}

function calcBase() {
    if (body.female == true) {
        body.baseKcal = 664.7 + (13.7 * body.weight) + (1.8 * body.size) - (4.7 * body.age);
    } else if (body.female == false) {
        body.baseKcal = 655.1 + (9.6 * body.weight) + (5 * body.size) - (6.8 * body.age);
    }
    body.baseKj = body.baseKcal * 4.1868;
}

function calcTotal() {
    switch (activity.value) {
        case "1":
            body.totalKcal = body.baseKcal * .95;
            body.totalKj = body.baseKj * .95;
            console.log("base: " + body.baseKj + " | total: " + body.totalKj)
            break;
        case 2:
            body.totalKcal = body.baseKcal * 1.2;
            body.totalKj = body.baseKj * 1.2;
            break;
        case 3:
            body.totalKcal = body.baseKcal * 1.5;
            body.totalKj = body.baseKj * 1.5;
            break;
        case 4:
            body.totalKcal = body.baseKcal * 1.7;
            body.totalKj = body.baseKj * 1.7;
            break;
        case 5:
            body.totalKcal = body.baseKcal * 1.9;
            body.totalKj = body.baseKj * 1.9;
            break;
        case 6:
            body.totalKcal = body.baseKcal * 2.2;
            body.totalKj = body.baseKj * 2.2;
            break;
    }
}

function calcRate() {

    readInput();
    calcBase();
    calcTotal();
    writeOutput();

}