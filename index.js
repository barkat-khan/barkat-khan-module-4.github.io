let names = new Array();
names[0] = "yakove";
names[1] = "John";
names[2] = "Jason";
names[3] = "jin";
names[4] = "Paul";
names[5] = "Larry";
names[6] = "frank";
names[7] = "Paula";
names[8] = "laura";
names[9] = "jim";

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    if(names[i].charAt(0)==="j" || names[i].charAt(0)==="J"){
        console.log("Goodbye " + names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}


