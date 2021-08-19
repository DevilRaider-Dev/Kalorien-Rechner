/*
Aufgabenstellung

Heute werden wir einen Kalorienrechner programmieren. 
Zuerst müssen wir den Grundumsatz berechnen. Der Grundumsatz wird anhand der Harris Benedict Formel berechnet.
Grundumsatz bei Männern (Kalorien je Tag)
664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
Grundumsatz bei Frauen (Kalorien je Tag)
655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

! Das Ergebnis wird in Kilokalorien ausgegeben.

 Körperliche Belastung
PAL-Faktor
Schlafen
0,95
Nur Sitzen oder Liegen
1,2
Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit
1,5
Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer
1,7
Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen
1,9
Körperlich anstrengende berufliche Arbeit
2,2

*/

let body = { size: 0, age: 0, weight: 0 , female:true};

function readInput(){
    body.size = Number(document.getElementById("size").value);
    body.age = Number(document.getElementById("age").value);
    body.weight = Number(document.getElementById("weight").value);
    if(document.getElementById("female").checked){
        body.female = true;
    }else if(document.getElementById("male").checked){
        body.female = false;
    }
}

function calcRate(){
    readInput();
}