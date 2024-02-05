// for of loop  mainly use array


const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

// string 
const string1="hello"
for (const i of string1) {
    console.log(i);
    
}

//map//uniqe value
const map=new Map()
map.set('IN',"india")
map.set('USA',"united s of A")
map.set('FR',"France")
//console.log(map)
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

//for object//forin loop
const myObject1={
    js:'javascript',
    cpp:'c++',
    rd:'ruby'
}
for (const key in myObject1) {   // forin loop
    console.log(`${key} shortcut is for ${myObject1[key]}`);
    
}

//for array
const arr1=[1,2,3,4,5]
for (const key in arr) {
    console.log(arr1[key]);
  
    }


//forEach loop
const codding1=["js","ruby","c++","python"]
codding1.forEach(function(item){
    console.log(item);
})

// arow forEach loop
const codding=["js","ruby","c++","python"]
codding.forEach((item)=>{
    console.log(item);
})


// object into array forEach loop

const myObject=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"js",
        languageFileName:"js"
    },
    {
        languageName:"cpp",
        languageFileName:"cpp"
    }
]
myObject.forEach((item)=>{
    console.log(item.languageName);
})
