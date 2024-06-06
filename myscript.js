function order() {
    
    let num_bruschetta = document.getElementById("Bruschetta").value;
    num_bruschetta = Number(num_bruschetta);

    let num_calamari = document.getElementById("Calamari").value;
    num_calamari = Number(num_calamari);

    let num_arancini = document.getElementById("Arancini").value;
    num_arancini = Number(num_arancini);

    let num_spaghetti = document.getElementById("Spaghetti").value;
    num_spaghetti = Number(num_spaghetti);
    
    let num_shrooms = document.getElementById("Shrooms").value;
    num_shrooms = Number(num_shrooms);
    
    let num_carbonara = document.getElementById("Carbonara").value;
    num_carbonara = Number(num_carbonara);
    
    let cost = (num_bruschetta * 5.99 + num_calamari * 7.99 + num_arancini * 11.99 + num_spaghetti * 10.99 + num_shrooms * 12.99 + num_carbonara * 11.99) * 1.03 ;
    // alert (cost);
    // round(cost, 2);
    alert( "Your order will cost $" + cost);
   
    } 
    