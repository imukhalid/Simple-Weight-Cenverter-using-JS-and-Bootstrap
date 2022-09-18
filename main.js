document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener('input', (e) => {
    document.getElementById("output").style.visibility = "visible";
    let lbsInput = e.target.value;
    document.getElementById("grams").innerHTML = lbsInput/0.0022046;
    document.getElementById("kgrams").innerHTML = lbsInput/2.2046;
    document.getElementById("ounces").innerHTML = lbsInput * 16; 
})