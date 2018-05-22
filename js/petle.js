let tablica = [1, 150, 300, 420, 325, 100];


/*for(let i = 0; i < tablica.length; i++) {
    console.log("index["+ i + "], a element to: " + tablica[i]);
}*/

tablica.forEach(function (element, index) {
    console.log("index[" + index + "], a element to : " + element);
});

let liczba = 10;
while (liczba >= 1) {
    console.log(liczba);
    liczba--;
}

let liczba2 = 10;
do {
    console.log(liczba2);
    liczba2--;
} while (liczba2 > 1);

let i = 0;
while (true) {
    console.log("napis [i=" + i + "] ");
    if (i++ >= 9) {
        break;
    };
}

let jsonObject = {
    "employees": [ {
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "firstName": "Anna",
        "lastName": "Smith"
    },
    {
        "firstName": "Peter",
        "lastName": "Jones"
    }
    ]
}
for(let i = 0; i < jsonObject.employees.length; i++){
    console.log(jsonObject.employees[i].firstName + ' ' + jsonObject.employees[i].lastName);
}
console.log(jsonObject.employees[0].firstName);
