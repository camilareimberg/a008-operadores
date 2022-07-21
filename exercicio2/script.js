numero1 = Number(prompt("Olá, me informe um número"))
numero2 = Number(prompt("Olá, me informe um outro número"))

console.log ("Número 1=", numero1)
console.log ("Número 2=", numero2)

console.log("O primeiro número é maior que segundo?", numero1>numero2)
console.log("O primeiro número é igual ao segundo?", numero1==numero2)

resto= numero1%numero2
console.log("O primeiro número é divisível pelo segundo?", resto===0)

resto2= numero2%numero1
console.log("O segundo número é divisível pelo primeiro?", resto2===0)