function order() {


    let num_spaghetti = document.getElementById("Spaghetti").value;
    num_spaghetti = Number(num_spaghetti);
    // alert (num_spaghetti)
    let num_shrooms = document.getElementById("Shrooms").value;
    num_shrooms = Number(num_shrooms);
    // alert (num_shrooms)
    let num_carbonara = document.getElementById("Carbonara").value;
    num_carbonara = Number(num_carbonara);
    // alert (num_carbonara)
    let cost = (num_spaghetti * 10.99 + num_shrooms * 12.99 + num_carbonara * 11.99) * 1.03 ;
    alert (cost);
    round(cost, 2);
    alert( "Your order will cost $" + cost);
   
    } 
    