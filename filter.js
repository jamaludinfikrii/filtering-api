var arrObj = [
    {nama : "Braund" , Pclass : 1 , Fare : 450},
    {nama : "Cummingks" , Pclass : 3 , Fare : 23},
    {nama : "Hekikens" , Pclass : 1 , Fare : 345},
    {nama : "Allens" , Pclass : 2 , Fare : 123},
]

var hasilFilter = arrObj.filter((val) => {
    return val.nama.toLowerCase().startsWith('br') // braud startwits br = true

})


console.log(arrObj[0].nama.toLowerCase().startsWith('br'))