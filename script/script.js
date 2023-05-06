function logar () {
    const name = document.getElementById('NickName').value
    const pass = document.getElementById('password').value

    if(name === "admin" && pass === "admin" || name === "user" && pass === "user"){
        alert(`nice ${name}, bem vindo de volta monstro(a)`);
        location.href = "home/home.html"
    } else if(name === "user"){
        location.href = "home/home2.html"
    }
     else{
        alert(`${name}??Quem seria voce?... `)
    }
}