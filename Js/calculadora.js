// function calcular(){
//     alert(`Entre a la función`)
let num1=parseInt(document.getElementById("num1").value);
let num2=parseInt(document.getElementById("num2").value);
//     let op=document.getElementById("operacion").value;

//     console.log(`El num 1 es ${num1} y el numero 2 ${num2} la suma es ${op}`);
    

//     switch(op){
//         case "1":
//             let res=num1+num2;
//             alert(`El num 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`);
//         break;
//         case "2":
//             res=num1-num2
//             alert(`El resultado de la resta es ${res}`);
//         break;
//         case "3":
//             res=num1*num2
//             alert(`El resultado de la multiplicacion es ${res}`);
//         break;
//         case "4":
//             res=num1/num2
//             alert(`El resultado de la division es ${res.toFixed(2)}`);
//         break;
//         default:
//             alert("La opción no es valida");
//         break;
//     }
    const ops=document.getElementById("ops");
    ops.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.id);

    if(e.target.id=="Suma"){
        let res=num1+num2;
            console.log(`El num 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`);
    }

    else if (e.target.id=="Resta"){
        res=num1-num2
            console.log(`El resultado de la resta es ${res}`);
    }

    else{
        console.log("La opción no es valida");
    }
    const rta=document.getElementById("respuesta")

    if(e.tanger.id=="Suma"){
    let texto= 
    `<p>
    <img src="../img/correcta.png">
    </p>`
    rta.innerHTML=texto;
}
})