var employeeList = [
    {
        id: 1,
        name: "soumya",
        isLead: false,
    },
    {
        id: 2,
        name: "sakshi",
        isLead: true,
        team: [
            {
                id: 5,
                name: "sujatha",
                isLead: true,
                team: [{ id: 7, name: "tej", isLead: false }],
            },
            {
                id: 6,
                name: "pavan",
                isLead: true,
                team: [{ id: 7, name: "tej", isLead: false }],
            },
        ],
    },
    {
        id: 3,
        name: "anjali",
        isLead: true,
        team: [
            {
                id: 9,
                name: "kiya",
                isLead: true,
                team: [{ id: 10, name: "anjali", isLead: false }],
            },
            {
                id: 9,
                name: "kiya",
                isLead: true,
                team: [{ id: 10, name: "anjali", isLead: false }],
            },
        ],
    },
    {
        id: 4,
        name: "tej",
        isLead: false,
    },
];
function team(employee) {
    if (employee.team) {
        console.log("".concat(employee.name, " is lead"));
    }
    else {
        console.log("".concat(employee.name, " is not lead"));
    }
}
function printLeadName(arr) {
    arr.map(function (employee) {
        if (employee.team) {
            console.log("".concat(employee.name, " is lead"));
            employee.team.map(function (employee) {
                team(employee);
                // if (employee.team) {
                //   console.log(`${employee.name} is lead`);
                // } else {
                //   console.log(`${employee.name} is not lead`);
                // }
            });
        }
        else {
            console.log("".concat(employee.name, " is not lead"));
        }
    });
}
printLeadName(employeeList);
