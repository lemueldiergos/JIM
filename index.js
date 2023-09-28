var tablet1 = document.getElementById("tab_com");

var INTERATION_STATUS = document.getElementById("status_dc_id");
var INTERATION_STATE  = document.getElementById("itermax_id");

var final_val0 = document.getElementById("c1_id"),
    final_val1 = document.getElementById("c2_id"),
    final_val2 = document.getElementById("c3_id"),
    final_val3 = document.getElementById("c4_id"),
    final_val4 = document.getElementById("c5_id");

var tr_c;
var tdi_c, td0_c, td1_c, td2_c;

var final_it = document.getElementById("iterfinal_id");

var IT_VAL = document.getElementById("IT_VAL");
var SN_VAL = document.getElementById("SN_VAL");

var ID_A = document.getElementsByClassName("ID_A"),
    ID_B = document.getElementsByClassName("ID_B"),
    ID_C = document.getElementsByClassName("ID_C"),
    ID_D = document.getElementsByClassName("ID_D"),
    ID_E = document.getElementsByClassName("ID_E");


var ID_AN = document.getElementsByClassName("ID_AN"),
    ID_BN = document.getElementsByClassName("ID_BN"),
    ID_CN = document.getElementsByClassName("ID_CN"),
    ID_DN = document.getElementsByClassName("ID_DN"),
    ID_EN = document.getElementsByClassName("ID_EN");



var ARR_TAB = [
    [5,     -2,     3,   -1,    3,      25],
    [-3,     9,     1,    2,    3,      39],
    [2,     -1,     -7,   3,    3,      64],
    [2,     -1,     -7,   3,    3,      21],
    [2,     -1,     -7,   3,    3,      53]
];

var ARR_NEW_TAB = [
    [0,     0,      0,      0,      0,      0],
    [0,     0,      0,      0,      0,      0],
    [0,     0,      0,      0,      0,      0],
    [0,     0,      0,      0,      0,      0],
    [0,     0,      0,      0,      0,      0]
];

var ID_LIST_A = document.getElementsByClassName("ID_MET");


var X1_arr = [parseFloat(document.getElementById("C1IV").value)], 
    X2_arr = [parseFloat(document.getElementById("C2IV").value)],
    X3_arr = [parseFloat(document.getElementById("C3IV").value)],
    X4_arr = [parseFloat(document.getElementById("C4IV").value)],
    X5_arr = [parseFloat(document.getElementById("C5IV").value)];

var set_iteration           = 100,
    set_decimal_place       = 4;

var x1_iteration_stop = [],
    x2_iteration_stop = [],
    x3_iteration_stop = [],
    x4_iteration_stop = [],
    x5_iteration_stop = [],
    Fixed_iteration   = 0;




for(y = 0 ; ARR_TAB.length > y ; y++) {
    for(x = 0 ; ARR_TAB[0].length > x ; x++) {
        var pos = y+""+x;
       
        switch(pos) {
            case "00": case "14": case "23": case "32": case "41":
            ARR_TAB[y][x] = parseInt(ID_LIST_A[1].value[0]);
            break;
            case "01": case "10": case "24": case "33": case "42":
            ARR_TAB[y][x] = parseInt(ID_LIST_A[1].value[1]);
            break;
            case "02": case "11": case "20": case "34": case "43":
            ARR_TAB[y][x] = parseInt(ID_LIST_A[1].value[2]);
            break;
            case "03": case "12": case "21": case "30": case "44":
            ARR_TAB[y][x] = parseInt(ID_LIST_A[1].value[3]);
            break;
            case "04": case "13": case "22": case "31": case "40":
            ARR_TAB[y][x] = parseInt(ID_LIST_A[0].value[3]);
            break;
        } 
    }    
 }

for(i = 0 ; ID_A.length > i ; i++) {
    ID_A[i].innerHTML = ID_LIST_A[1].value[0];
    ID_B[i].innerHTML = ID_LIST_A[1].value[1];
    ID_C[i].innerHTML = ID_LIST_A[1].value[2];
    ID_D[i].innerHTML = ID_LIST_A[1].value[3];
    ID_E[i].innerHTML = ID_LIST_A[0].value[3];
}


for(i = 0 ; ID_AN.length > i ; i++) {
    ID_AN[i].innerHTML = ID_LIST_A[1].value[0];
    ID_BN[i].innerHTML = ID_LIST_A[1].value[1];
    ID_CN[i].innerHTML = ID_LIST_A[1].value[2];
    ID_DN[i].innerHTML = ID_LIST_A[1].value[3];
    ID_EN[i].innerHTML = ID_LIST_A[0].value[3];
}


ARR_NEW_TAB[4] = ARR_TAB[4];
ARR_NEW_TAB[3] = ARR_TAB[0];
ARR_NEW_TAB[2] = ARR_TAB[1];
ARR_NEW_TAB[1] = ARR_TAB[2];
ARR_NEW_TAB[0] = ARR_TAB[3];

//NEGATIVE VAL
ARR_NEW_TAB[0][2] *= -1; ARR_NEW_TAB[0][3] *= -1;
ARR_NEW_TAB[1][1] *= -1; 
ARR_NEW_TAB[2][2] *= -1; ARR_NEW_TAB[2][4] *= -1; 
ARR_NEW_TAB[3][1] *= -1; ARR_NEW_TAB[3][3] *= -1; 
ARR_NEW_TAB[4][2] *= -1; 


 
var C1_DM = ARR_NEW_TAB[0][0],
    C2_DM = ARR_NEW_TAB[1][1],
    C3_DM = ARR_NEW_TAB[2][2],
    C4_DM = ARR_NEW_TAB[3][3],
    C5_DM = ARR_NEW_TAB[4][4];



function generate() {

    X1_arr = [parseFloat(document.getElementById("C1IV").value)]; 
    X2_arr = [parseFloat(document.getElementById("C2IV").value)];
    X3_arr = [parseFloat(document.getElementById("C3IV").value)];
    X4_arr = [parseFloat(document.getElementById("C4IV").value)];
    X5_arr = [parseFloat(document.getElementById("C5IV").value)];

    console.log(X1_arr);
    
    while(tablet1.firstChild) {
        tablet1.firstChild.remove();
    }
    setTimeout(function() {
        generate1();
    }, 500);
}

function generate1() {
    
    document.getElementById("cle_BTN");

    set_iteration           = IT_VAL.value,
    set_decimal_place       = SN_VAL.value;
    
    

    var ITERH = document.createElement("tr");
    var IH    = document.createElement("th");
    var C1H   = document.createElement("th");
    var C2H   = document.createElement("th");
    var C3H   = document.createElement("th");
    var C4H   = document.createElement("th");
    var C5H   = document.createElement("th");
    

    IH.innerHTML = "Iteration";
    C1H.innerHTML = "<th>C<sub>1</sub></th>";
    C2H.innerHTML = "<th>C<sub>2</sub></th>";
    C3H.innerHTML = "<th>C<sub>3</sub></th>";
    C4H.innerHTML = "<th>C<sub>4</sub></th>";
    C5H.innerHTML = "<th>C<sub>5</sub></th>";
    

    ITERH.appendChild(IH);

    ITERH.appendChild(C1H);
    ITERH.appendChild(C2H);
    ITERH.appendChild(C3H);
    ITERH.appendChild(C4H);
    ITERH.appendChild(C5H);
    
    

    tablet1.appendChild(ITERH);

 for(i = 0 ; i <= set_iteration ; i++) {

    console.log(X1_arr);
    
    console.log(X2_arr);
    
    console.log(X3_arr);
    
    console.log(X4_arr);

    console.log(X5_arr);

    
// ------------------------- SOLVE ------------------
tr_c = document.createElement("tr");
         
tdi_c = document.createElement("td");
tdi_c.innerHTML = i;

td0_c = document.createElement("td");
td0_c.innerHTML = X1_arr[i].toFixed(set_decimal_place);

td1_c = document.createElement("td");
td1_c.innerHTML = X2_arr[i].toFixed(set_decimal_place);

td2_c = document.createElement("td");
td2_c.innerHTML = X3_arr[i].toFixed(set_decimal_place);

td3_c = document.createElement("td");
td3_c.innerHTML = X4_arr[i].toFixed(set_decimal_place);

td4_c = document.createElement("td");
td4_c.innerHTML = X5_arr[i].toFixed(set_decimal_place);


tr_c.appendChild(tdi_c);


tr_c.appendChild(td0_c);
tr_c.appendChild(td1_c);
tr_c.appendChild(td2_c);
tr_c.appendChild(td3_c);
tr_c.appendChild(td4_c);


tablet1.appendChild(tr_c);

// ------------------------- SOLVE ------------------

    
    
    let x1 = ( (ARR_NEW_TAB[0][5]) - (ARR_NEW_TAB[0][1]*X2_arr[i]) - (ARR_NEW_TAB[0][2]*X3_arr[i]) - (ARR_NEW_TAB[0][3]*X4_arr[i]) - (ARR_NEW_TAB[0][4]*X5_arr[i])) / C1_DM;
    let x2 = ( (ARR_NEW_TAB[1][5]) - (ARR_NEW_TAB[1][0]*X1_arr[i]) - (ARR_NEW_TAB[1][2]*X3_arr[i]) - (ARR_NEW_TAB[1][3]*X4_arr[i]) - (ARR_NEW_TAB[1][4]*X5_arr[i])) / C2_DM;
    let x3 = ( (ARR_NEW_TAB[2][5]) - (ARR_NEW_TAB[2][0]*X1_arr[i]) - (ARR_NEW_TAB[2][1]*X2_arr[i]) - (ARR_NEW_TAB[2][3]*X4_arr[i]) - (ARR_NEW_TAB[2][4]*X5_arr[i])) / C3_DM;    
    let x4 = ( (ARR_NEW_TAB[3][5]) - (ARR_NEW_TAB[3][0]*X1_arr[i]) - (ARR_NEW_TAB[3][1]*X2_arr[i]) - (ARR_NEW_TAB[3][2]*X3_arr[i]) - (ARR_NEW_TAB[3][4]*X5_arr[i])) / C4_DM; 
    let x5 = ( (ARR_NEW_TAB[4][5]) - (ARR_NEW_TAB[4][0]*X1_arr[i]) - (ARR_NEW_TAB[4][1]*X2_arr[i]) - (ARR_NEW_TAB[4][2]*X3_arr[i]) - (ARR_NEW_TAB[4][3]*X4_arr[i])) / C5_DM;




    X1_arr.push(x1);
    X2_arr.push(x2);
    X3_arr.push(x3);
    X4_arr.push(x4);
    X5_arr.push(x5);
    
    if((parseFloat(X1_arr[i+1].toFixed(set_decimal_place)) == parseFloat(X1_arr[i].toFixed(set_decimal_place)))) {x1_iteration_stop.push(i);}
    if((parseFloat(X2_arr[i+1].toFixed(set_decimal_place)) == parseFloat(X2_arr[i].toFixed(set_decimal_place)))) {x2_iteration_stop.push(i);}
    if((parseFloat(X3_arr[i+1].toFixed(set_decimal_place)) == parseFloat(X3_arr[i].toFixed(set_decimal_place)))) {x3_iteration_stop.push(i);}
    if((parseFloat(X4_arr[i+1].toFixed(set_decimal_place)) == parseFloat(X4_arr[i].toFixed(set_decimal_place)))) {x4_iteration_stop.push(i);}
    if((parseFloat(X5_arr[i+1].toFixed(set_decimal_place)) == parseFloat(X5_arr[i].toFixed(set_decimal_place)))) {x5_iteration_stop.push(i);}
    
    //console.log(X1_arr[i].toFixed(set_decimal_place) + " : " + X2_arr[i].toFixed(set_decimal_place) + " : " + X3_arr[i].toFixed(set_decimal_place) + " : " + X4_arr[i].toFixed(set_decimal_place) + " : " + X5_arr[i].toFixed(set_decimal_place) );
 

    

}

    try {
     Fixed_iteration = (x1_iteration_stop[0] + x2_iteration_stop[0] + x3_iteration_stop[0] +  x4_iteration_stop[0] +  x5_iteration_stop[0])/5;
     final_it.innerHTML = Math.round(Fixed_iteration);
        INTERATION_STATUS.innerHTML = "Converge";
        INTERATION_STATE.innerHTML  = set_decimal_place;
     final_val0.innerHTML = X1_arr[Math.round(Fixed_iteration)].toFixed(set_decimal_place);
     final_val1.innerHTML = X2_arr[Math.round(Fixed_iteration)].toFixed(set_decimal_place);
     final_val2.innerHTML = X3_arr[Math.round(Fixed_iteration)].toFixed(set_decimal_place);
     final_val3.innerHTML = X4_arr[Math.round(Fixed_iteration)].toFixed(set_decimal_place);
     final_val4.innerHTML = X5_arr[Math.round(Fixed_iteration)].toFixed(set_decimal_place);
    } catch(e) {
        //console.log(e);
        final_it.innerHTML = "Infinite";
        INTERATION_STATUS.innerHTML = "Diverge";
        INTERATION_STATE.innerHTML  = set_iteration;
        final_val0.innerHTML = X1_arr[set_iteration].toFixed(set_decimal_place);
        final_val1.innerHTML = X2_arr[set_iteration].toFixed(set_decimal_place);
        final_val2.innerHTML = X3_arr[set_iteration].toFixed(set_decimal_place);
        final_val3.innerHTML = X4_arr[set_iteration].toFixed(set_decimal_place);
        final_val4.innerHTML = X5_arr[set_iteration].toFixed(set_decimal_place);
    }
     
    
}

generate();


