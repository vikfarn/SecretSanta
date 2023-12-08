
names = [ 'd', 'c', 'b', 'a' ]
console.log(names);
console.log("Hello")

function HandlePress() {
    name = document.getElementById("name").value;
    
    index = names.indexOf(name)
    if (index == -1){
        alert("This name is not in the names list")
    } else if (index < names.length - 1){
        alert("The person you should give to is " + names[index + 1])
    }
    else {
        alert("The person you should give to is " + names[0])
    }
}