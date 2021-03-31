function solve(data, criteria) {
    let [field, value] = criteria.split("-");
    let count = 0;
    let dataArray = Array.from(JSON.parse(data));

    dataArray.forEach(function (element) {
        if (element[field] === value) {
            console.log(`${count++}. ${element["first_name"]} ${element["last_name"]} - ${element["email"]}`)
        }
    })
}


// solve(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female')