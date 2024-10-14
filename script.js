/*
git clone https
cd JS1_4
git status
cyklus ukládání na gitHub:
git add .
git commit -m "text"
git push
*/

//ukol 1

const title = "Pán prstenů"

console.log(title.length)
console.log(title.toUpperCase())
console.log(title.slice(0, 6))
console.log(title.slice(-5))

//ukol 2

const email = prompt("Zadej emailovou adresu")
const delka = email.length
const atIndex = email.indexOf("@")

document.body.innerHTML += "<p>" + "Emailova adresa: " + email + "</p>"
document.body.innerHTML += "<p>" + "Pozice zavinace: " + atIndex + "</p>"
document.body.innerHTML += "<p>" + "Uzivatelske jmeno: " + email.slice(0, atIndex) + "</p>"
document.body.innerHTML += "<p>" + "Domena: " + email.slice(atIndex + 1, delka) + "</p>"

//ukol 3
const ulice = "Pod Stájemi 67"
const mesto = "12754 Klysnov" //kdybychom neco pocitali, smerovacku musime dat jako cislo

//alt + 96 = back tick
document.body.innerHTML += `
<address>
<p>${ulice}</p>
<p>${mesto}</p>
</address>
`