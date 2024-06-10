
const userFlavorInput = prompt(
    "Please enter which flavors you would like",
    "vanilla,chocolate,coffee,strawberry,superman"
);

stringArray = userFlavorInput.split(",");

console.log(stringArray);


function getChocolate(stringArray){
    const flav1 = "chocolate"
    const chocArry = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === flav1)
            chocArry.push(stringArray[i]);

        
    }
    return chocArry.length;
    




}
console.log(`You have ${getChocolate(stringArray)} chocolate orders.`);



function getVanilla(stringArray){
    const vaniArry = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "vanilla")
            vaniArry.push(stringArray[i]);

        
    }
   return vaniArry.length;


    
}

console.log(`You have ${getVanilla(stringArray)} vanilla orders.`);


function getStrawberry(stringArray){
    const strawArry = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "strawberry")
            strawArry.push(stringArray[i]);

        
    }
    return strawArry.length;        
 }

 console.log(`You have ${getStrawberry(stringArray)} strawberry orders.`);
    


function getCoffee(stringArray){
    const coffArry = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "coffee")
            coffArry.push(stringArray[i]);

        
    }
    return coffArry.length;
        
    }

    console.log(`You have ${getCoffee(stringArray)} coffee orders.`);
    

function getSuperman(stringArray){
    const superArry = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "superman")
            superArry.push(stringArray[i]);

        
    }
    return superArry.length;
    
}
console.log(`You have ${getSuperman(stringArray)} superman orders.`);

    