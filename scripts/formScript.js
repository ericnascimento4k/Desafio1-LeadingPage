function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function check_form() {
    var inputs = document.getElementsByClassName("required");
    let userMail = document.getElementById("formMail").value;

    var len = inputs.length;
    var valid = true;
    for (var i = 0; i < len; i++) {
        if (!inputs[i].value) {
            valid = false;
        }
    }
    if (!valid) {
        alert("Por favor preencha todos os campos.");
        return false;
    } else {
        if (validateEmail(userMail) === false) {
            alert("Por favor verifique o e-mail digitado e tente novamente.");
            return false;
        } else {
            return true;
        }
    }
}

document.getElementById("formSend").addEventListener("click", function() {

    let oldUsers = JSON.parse(localStorage.getItem("usuarios_blackfriday")) || [];

    let userName = document.getElementById("formName").value;

    let userMail = document.getElementById("formMail").value;

    let userObject = {
        name: userName,
        email: userMail
    };

    oldUsers.push(userObject);

    window.localStorage.setItem("usuarios", JSON.stringify(oldUsers));

    form.submit();
});