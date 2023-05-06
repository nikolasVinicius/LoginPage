function logar () {
    const name = document.getElementById('NickName').value
    const pass = document.getElementById('password').value

    if(name === "melinor" && pass === "manunor02" || name === "manu" && pass === "melinu02"){
        alert(`nice ${name}, bem vindo de volta monstro(a)`);
        location.href = "home/home.html"
    } else{
        alert(`${name}??Quem seria voce?... `)
    }
}