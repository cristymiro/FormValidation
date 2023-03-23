import {qs} from "./utils/helpers";

const nameInput = qs("#inputName"); //document.querySelector("#inputName");
const mailInput = qs("#inputMail"); //document.querySelector("#inputMail");
const passwordInput = qs("#inputPassword");

nameInput?.addEventListener('change', function(e){
console.log(e);
});

