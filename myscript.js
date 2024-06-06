function order() {
    
    let num_bruschetta = document.getElementById("Bruschetta").value;
    num_bruschetta = Number(num_bruschetta);

    let num_calamari = document.getElementById("Calamari").value;
    num_calamari = Number(num_calamari);

    let num_arancini = document.getElementById("Arancini").value;
    num_arancini = Number(num_arancini);

    let num_ceasar = document.getElementById("Caesar").value;
    num_ceasar = Number(num_ceasar);

    let num_caprese = document.getElementById("Caprese").value;
    num_caprese = Number(num_caprese);

    let num_chopped = document.getElementById("Chopped").value;
    num_chopped = Number(num_chopped);

    let num_spaghetti = document.getElementById("Spaghetti").value;
    num_spaghetti = Number(num_spaghetti);
    
    let num_shrooms = document.getElementById("Shrooms").value;
    num_shrooms = Number(num_shrooms);
    
    let num_carbonara = document.getElementById("Carbonara").value;
    num_carbonara = Number(num_carbonara); 

    let num_pepperoni = document.getElementById("Pepperoni").value;
    num_pepperoni = Number(num_pepperoni);

    let num_margherita = document.getElementById("Margherita").value;
    num_margherita = Number(num_margherita);

    let num_cheese = document.getElementById("Cheese").value;
    num_cheese = Number(num_cheese);
    
    let cost = (num_bruschetta * 5.99 + num_calamari * 7.99 + num_arancini * 11.99 + num_ceasar * 6.99 + num_caprese * 6.99 + num_chopped * 6.99 + num_spaghetti * 10.99 + num_shrooms * 12.99 + num_carbonara * 11.99 + num_pepperoni * 12.99 + num_margherita * 11.99 + num_cheese * 10.99) * 1.03 ;
    // alert (cost);
    // round(cost, 2);
    alert( "Your order will cost $" + cost);
   
    } 
    