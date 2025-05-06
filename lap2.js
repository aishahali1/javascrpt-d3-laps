
const characters = [ { 
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
     }, 
    { 
    name: "Leia Organa", 
    height: 160,
    gender: "female", 
    mass: 56,
    eye_color: "blue",
     }, 
    { 
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
     },
     { 
    name: "Chewie",
    height: 222, 
    gender: "male",
    mass: 190,
    eye_color: "black",
     },
     {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2, 
    eye_color: "red",
     },
     ];
     //Q1
     console.log("mass>75");
     let findMass = characters.find((character)=> character.mass > 75);
     console.log(findMass);
      //Q2
      console.log("height<180 - eye color = blue");
     let findEyeColor = characters.find((character)=> character.height<180 && character.eye_color == "blue");
     console.log(findEyeColor);
     //Q3
     console.log("150<height>210");
     let getCharactersH = characters.filter((character)=> 150<character.height && character.height<210)
     console.log(getCharactersH);
     //Q4
     console.log("get gender = female");
     let getFemale = characters.filter((character)=> character.gender == "female")
     console.log(getFemale);
     //Q5
     console.log("Array of eye color only");
     let eyeColorOnly = characters.map((character)=> character.eye_color)
     console.log(eyeColorOnly);
     
     //Q6
     console.log("Array of mass only");
     let eyeMassOnly = characters.map((character)=> character.mass)
     console.log(eyeMassOnly);
     
     //Q7
     console.log("sort by name alphabetically");
     let sortNameAlpha = characters.map((character)=> character.name).sort();
     console.log(sortNameAlpha);

     //Q8 
     console.log("sort by height");
     let sortHeight = characters.map((character)=> character.height).sort();
     console.log(sortHeight);
     //Q9
     console.log("every height greater than 100");
     let everyHeight = characters.every((character)=> character.height>100)
     console.log(everyHeight);
     //Q10
     console.log("every character lighter than 200");
     let everyMass = characters.every((character)=> character.mass<200)
     console.log(everyMass);
     //Q11
     console.log("at least one character with black eyes");
     let someEyes = characters.some((character)=> character.eye_color == "black")
     console.log(someEyes);
     //Q12 
     console.log("at least one character with a height of exactly 177");
     let someHeight = characters.some((character)=> character.height = 177)
     console.log(someHeight);
     
     
     