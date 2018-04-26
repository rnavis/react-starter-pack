var _ = require('lodash');
console.log("module2 with people loaded.....");
let people=[{
    "id": 1,
    "first_name": "Wynny",
    "last_name": "Narramore",
    "email": "wnarramore0@51.la",
    "gender": "Female",
    "ip_address": "185.149.91.139"
}, {
    "id": 2,
    "first_name": "Tod",
    "last_name": "Seeler",
    "email": "tseeler1@about.me",
    "gender": "Male",
    "ip_address": "43.4.175.41"
}, {
    "id": 3,
    "first_name": "Vinny",
    "last_name": "Grzelewski",
    "email": "vgrzelewski2@photobucket.com",
    "gender": "Male",
    "ip_address": "43.217.111.189"
}, {
    "id": 4,
    "first_name": "Essy",
    "last_name": "Dogg",
    "email": "edogg3@theguardian.com",
    "gender": "male",
    "ip_address": "35.50.212.155"
}, {
    "id": 5,
    "first_name": "Sargent",
    "last_name": "Albasini",
    "email": "salbasini4@freewebs.com",
    "gender": "Male",
    "ip_address": "160.180.87.234"
}, {
    "id": 6,
    "first_name": "Norri",
    "last_name": "Brannigan",
    "email": "nbrannigan5@edublogs.org",
    "gender": "Female",
    "ip_address": "78.15.221.170"
}];

var count = _.filter(people, {gender:"Female"}).length;
//alert(count);