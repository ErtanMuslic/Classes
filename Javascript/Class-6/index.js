// var property="address"

// var a ={name:undefined,surname:'Muslic'};
// var aKeys= Object.keys(a);
// var aValues = Object.values(a);

// console.log(aKeys,aValues);
// console.log(aKeys.includes('name'))

// if(a["address"] !== undefined){
//     console.log("ne nalazi se");
// }
// else{
//     console.log(a["address"]);
// }
// console.log(a["name"]);        // console.log(a.name);

// var object= {
//     name:"Ertan",
//     surname:"Muslic",
//     address: {
//         street:"Osmana Dervisurevica",
//         number:'20',
//         city:"Novi Pazar",
//     },
//     friends: [{name:"Ramiz"} ,{name:"Amel"}],
// };
// object.Samir='Joubert III'                              //Dodavanje novih objekata
// object.FullName=`${object.name} ${object.surname}`;     //Dodavanje novih objekata
// delete object.Samir;                                    //Brisanje -||-
// object.address=undefined;                               //Promena -||-
// object.friends.push({name:"Dado"});                     //Dodavanje novih objekata na vec postojece objekte
// console.log(object);
// console.log(object.friends[1]);


var nizKorisnika = [{name:"Ertan"},{name:"Suad"},{name:"Ramiz"}];

// for(var i=0;i<nizKorisnika.length;i++){
//     if(nizKorisnika[i].name=="Suad"){
//         console.log(nizKorisnika[i].name);
// }
// }

// for(var i=0;i<nizKorisnika.length;i++){
//     var element=nizKorisnika[i];
//     if(element.name=="Suad"){
//         console.log(element.name);
// }
// }


function findObject(niz, parametar, vrednostParametra){
    for(var i=0;i<niz.length;i++){
        const korisnik=niz[i];
        if(korisnik[parametar] === vrednostParametra){
            console.log(korisnik);
    }
    }
}







findObject(nizKorisnika, 'name', 'Suad');
//nice