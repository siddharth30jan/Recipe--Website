$(function(){
    let button=$('#loda');
    let query=$(".search__field");
    let box=$(".results__list")
    let proxy='https://cors-anywhere.herokuapp.com/';
    let key='a676b40f9c0d7ae8cab6f1f0697c9ad9';
    let recipe_box=$(".recipe");
    let shopping_list;
        let addbutton;
        let name_recipe=[];

    //Recipe box!!
    window.addEventListener('hashchange',function(){
        //Loader
        recipe_box.empty();
        recipe_box.append(`<div class="loader">   
       <svg>
           <use href="img/icons.svg#icon-cw"></use>
       </svg>
       </div>`);
        const id=window.location.hash.replace('#','');
       // console.log(id);
      
        $.get(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${id}`,function(result){
            let data=JSON.parse(result);
           // console.log(data);
           
             let recipe=data.recipe;
             name_recipe.push(recipe.title);
             console.log(name_recipe);
            recipe_box.empty();
            recipe_box.append(` <figure class="recipe__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img">
            <h1 class="recipe__title">
                <span>${recipe.title}</span>
            </h1>
        </figure>
       
        
            </div>
            <button class="recipe__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
        </div>
        <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1000</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">g</span>
                            pasta
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/2</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            ricotta cheese
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit"></span>
                            can of tomatoes, whole or crushed
                        </div>
                    </li>


                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit"></span>
                            can tuna packed in olive oil
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/2</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            grated parmesan cheese
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/4</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            fresh basil, chopped or torn
                        </div>
                    </li>
                </ul>

                <button id="choot" class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

        <div class="recipe__directions">
            <h2 class="heading-2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
            </p>
            <a class="btn-small recipe__btn" href="${recipe.source_url}" target="_blank">
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>

            </a>
        </div>`)

       

        //INgridents box!!
        let ingridient_box=$(".recipe__ingredient-list"); //IMP***   After the page has actually rendered, uske bad utha rha hoon!!
        ingridient_box.empty();
        for(temp of recipe.ingredients)
        {
            console.log(temp);
            ingridient_box.append(`<li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__ingredient">
                ${temp}
            </div>
        </li>`)
        }
       

        //Shopping List!!
        shopping_list=$(".shopping__list");
        addbutton=$('#choot');
        console.log("FIRSt");
     /*   shopping_list.append(`
            <li class="shopping__item">
                        <div class="shopping__count">
                            <input type="number" value="1" step="1">
                        </div>
                        <p class="shopping__description">${name_recipe[0]}</p>
                    </li>
            `)*/
        addbutton.click(function(){
            console.log("CLICKED!!!")
            console.log(name_recipe.length);
            shopping_list.empty();
            for(temp of name_recipe)
            {
                shopping_list.append(`
                <li class="shopping__item">
                            <div class="shopping__count">
                                <input type="number" value="500" step="100">
                                <p>g</p>
                            </div>
                            <p class="shopping__description">${temp}</p>
                            <button class="shopping__delete btn-tiny">
                                <svg>
                                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                                </svg>
                            </button>
                        </li>
                `)
            }
           
        })      

    })



        })
       // console.log(name_recipe.length);
        
        
   
   
        //Search
    button.click(function(event){
       event.preventDefault();
        //console.log("Clicked!!!");
       box.empty();
       //This is the loader!!!!
       box.append(`<div class="loader">   
       <svg>
           <use href="img/icons.svg#icon-cw"></use>
       </svg>
       </div>`);
       $.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query.val()}`,function(result){
        let pop=JSON.parse(result); //Converted the json string into an object
        box.empty();
        //console.log(pop);
        for(item of pop.recipes){
            box.append(`<li>
            <a class="results__link results__link--active" href="#${item.recipe_id}">
                <figure class="results__fig">
                    <img src="${item.image_url}" alt="${item.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${item.title}</h4>
                    <p class="results__author">${item.publisher}</p>
                </div>
            </a>
        </li>`);
        }     
        
    })
        
    }) 

})


