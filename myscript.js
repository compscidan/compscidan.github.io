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
    
    let num_tiramisu = document.getElementById("Tiramisu").value;
    num_tiramisu = Number(num_tiramisu);

    let num_cannoli = document.getElementById("Cannoli").value;
    num_cannoli = Number(num_cannoli);

    let num_cheesecake = document.getElementById("Cheesecake").value;
    num_cheesecake = Number(num_cheesecake);

    let num_ravioli = document.getElementById("Ravioli").value;
    num_ravioli = Number(num_ravioli);

    let num_garlic = document.getElementById("Garlic").value;
    num_garlic = Number(num_garlic);

    let num_meatballs = document.getElementById("Meatballs").value;
    num_meatballs = Number(num_meatballs);

    let num_coke = document.getElementById("Coke").value;
    num_coke = Number(num_coke);

    let num_diet = document.getElementById("Diet").value;
    num_diet = Number(num_diet);

    let num_fanta = document.getElementById("Fanta").value;
    num_carbonara = Number(num_carbonara);

    let num_sprite = document.getElementById("Sprite").value;
    num_sprite = Number(num_sprite);

    let num_negroni = document.getElementById("Negroni").value;
    num_negroni = Number(num_negroni);

    let num_bellini = document.getElementById("Bellini").value;
    num_bellini = Number(num_bellini);

    let num_margarita = document.getElementById("Margarita").value;
    num_margarita = Number(num_margarita);

    let cost = (num_bruschetta * 5.99 + num_calamari * 7.99 + num_arancini * 11.99 + num_ceasar * 6.99 + num_caprese * 6.99 + num_chopped * 6.99 + num_spaghetti * 10.99 + num_shrooms * 12.99 + num_carbonara * 11.99 + num_pepperoni * 12.99 + num_margherita * 11.99 + num_cheese * 10.99 + num_tiramisu * 8.99 + num_cannoli * 7.99 + num_cheesecake * 11.99 + num_ravioli * 8.99 + num_garlic * 5.99 + num_meatballs * 7.99 + num_coke * 2 + num_diet * 2 + num_fanta * 2 + num_sprite * 2 + num_negroni * 10 + num_bellini * 10 + num_margarita * 10) * 1.03 ;
    // alert (cost);
    // round(cost, 2);
    alert( "Your order will cost $" + cost);
   
    } 
    