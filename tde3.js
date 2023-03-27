function func() {
    console.log("click") 
    let style = document.getElementById('head').style.display
    if(style === "none") {
        document.getElementById('head').style.display = "block"
    } else {
        document.getElementById('head').style.display = "none"
    }
}

function getName() {
    let value = document.getElementById('inp ut').value
    document
    .getElementById('head-input')
    .innerText = `Bem-vindo: ${value}`
}