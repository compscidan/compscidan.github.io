function order() {


    var num_spaghetti = document.getElementById("Spaghetti").value;
    alert (num_spaghetti)
    num_spaghetti = Number(num_spaghetti);
    var num_shrooms = document.getElementById("Shrooms").value;
    alert (num_shrooms)
    num_shrooms = Number(num_shrooms);
    var num_carbonara = document.getElementById("Carbonara").value;
    alert (num_carbonara)
    num_carbonara = Number(num_carbonara);
    var cost = (num_spaghetti * 10.99 + num_shrooms * 12.99 + num_carbonara * 11.99) * 1.03 ;
    alert (cost);
    round(cost, 2)
    alert( "Your order will cost $" + cost);
   
    } 
    