let five = document.querySelector("#five");
let ten = document.querySelector("#ten");
let fifteen = document.querySelector("#fifteen");
let twentyFive = document.querySelector("#twentyFive");
let fifty = document.querySelector("#fifty");
let custum = document.querySelector("#custom");
let resetBtn = document.querySelector("#resetBtn")
// resetBtn.setAttribute("disable", "true")
// resetBtn.classList.add(".reset")

five.addEventListener("click", function(){
    five.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * 0.05) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML = answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
    
})
ten.addEventListener("click", function(){
    five.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * 0.1) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML= answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
    
})
fifteen.addEventListener("click", function(){
    fifteen.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * 0.15) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML= answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
})
twentyFive.addEventListener("click", function(){
    twentyFive.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * 0.25) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML= answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
})
fifty.addEventListener("click", function(){
    fifty.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * 0.5) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML= answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
    
})
custom.addEventListener("input", function(){
    custom.classList.add(".highLight")
    let billInput = document.querySelector("#billInput").value ;
    let numberOfPeopleInput = document.querySelector("#numberOfPeopleInput").value ;
    let tipPer = (billInput * (custom.value) /100) / numberOfPeopleInput
    let answer = tipPer.toFixed(2)
    let tipResult = document.querySelector("#tipResult")
    tipResult.innerHTML= answer

    let totalPer = (billInput/numberOfPeopleInput + tipPer)
    let finalResult = parseFloat(totalPer).toFixed(2)
    let totalResult = document.querySelector("#totalResult")
    totalResult.innerHTML = finalResult
    // resetBtn.setAttribute("enable", "true")
  
    
})

resetBtn.addEventListener("click", function(){
    billInput.value = ""
    numberOfPeopleInput.value = ""
    tipResult.innerHTML = "$00:00"
    totalResult.innerHTML =  "$00:00"
})




