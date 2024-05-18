const handleFoodSearch = () =>{
    const searchInput = document.getElementById("search")
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    .then(res => res.json())
    .then(data => {
        showData(data.meals)
    })
}

const showData = (foods) => {
    const foodContainer = document.querySelector(".food-container");
    foods.forEach(food=>{
        const div = document.createElement('div')
        div.className = "food-card";
        div.innerHTML=`
                <img class="food-img" src="${food.strMealThumb}" alt="">
                <div class="food-desc">
                    <h2>${food.strMeal}</h2>
                    <p>Cat: ${food.strCategory}</p>
                    <p>Area: ${food.strArea}</p>
                    <button onclick="handleDetail(${food.idMeal})" class="btn btn-primary">Details<button>
                </div>

        `
        foodContainer.appendChild(div)
    })
}

const handleDetail= (id) =>{

    const detailsNode = document.querySelector(".details")
    detailsNode.innerHTML = ""
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const food = data.meals[0]
        console.log(food);
        const div = document.createElement("div")
        div.className = "detail"
        div.innerHTML = 
        `
        <div class="food-desc">
            <h2>${food.strMeal}</h2>
            <p>Cat: ${food.strCategory}</p>
            <p>Area: ${food.strArea}</p>
            <p>-----------INGRADIENTS-------<p>
            <p>${food.strIngredient1}</p>
            <p>${food.strIngredient2}</p>
            <p>${food.strIngredient3}</p>
            <p>${food.strIngredient4}</p>
            <p>-----------INGRADIENTS-------<p>
            <p class='des'>Reciepe: ${food.strInstructions.split(' ').slice(0,50).join(' ')}</p>
            
        </div>
        `
        detailsNode.appendChild(div)
    })
    
}

