const x = prompt("Enter the number of the table...")
for (let i = x; i <= 20; i++) {
    for(let k = 1; k <= 10; k++){
        result = k*i
        document.write(`${i} x ${k} = ${result} <br>`)
    }
    document.write("<br>")
}

const y = prompt("Enter your percentage...")
if(y >= 90){
    document.write("Your Grade is A1+")
}
else if(y >= 80){
    document.write("Your Grade is A1")
}
else if(y >= 70){
    document.write("Your Grade is A")
}
else if(y >= 60){
    document.write("Your Grade is B")
}
else if(y >= 50){
    document.write("Your Grade is C")
}
else if(y >= 40){
    document.write("Your Grade is D")
}
else{
    document.write("Your are Fail")
}
