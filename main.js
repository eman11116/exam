
$(document).ready(function () {
    $("#loading").hide()
})
/*  ********************side bar************ */
$(".iconSideBar").click(function(){
let sideBarWidth=$(".side_Bar").innerWidth();
if($(".side-bar").css("left")=="0px"){
    $(".side-bar").animate({left:-sideBarWidth},1000)
}
else{
    $(".side-bar").animate({left:"0px"},1000)

}
})
    /*********************home******************** */
    let imgApi=document.getElementsByClassName("imgApi");

async function getData() {
    let  mealRes =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
   let mealData = await mealRes.json();
   return mealData
   }

   function displayData(meal) {
    let cartona="";
    for (let i=0; i<meal.meals.length;i++) {
        cartona+=`
        <div class="col-md-3 py-2 my_col ">
                <div id="imgApi">
                    <div class="img-meal">
                        <img class="rounded-2 w-100" src="${meal.meals[i].strMealThumb}"class="w-100">
                        <div class="home-content">
                            <p class="">${meal.meals[i].strMeal}</p>
                        </div>
                    </div>
                </div>
            </div>
    `
            document.querySelector(".row").innerHTML=cartona;
}
   }
 
 async function startApp(){
  let mealData=await  getData()
displayData(mealData)
}
startApp()

// ********************************
let descImg=document.getElementById("descImg");
let descTitle=document.getElementById("descTitle");
let Instructions=document.getElementById("Instructions");
let descCa=document.getElementById("descCa");
let recipesP=document.getElementById("recipesP");
let tags=document.getElementById("tags");


async function getInstructions() {
    let  ImealRes =await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
   let ImealData = await ImealRes.json();
   return ImealData
   }

   function displayInstructions(Imeal) {
    let Icartona="";
    for (let i=0; i<Imeal.meals.length;i++) {
        Icartona+=`
        <div class="desc d-flex justify-content-center py-5 ">
        <div class="imgDesc text-center  " >
            <img src="${Imeal.meals[i].strMealThumb}" class="w-50" id="descImg">
            <h2 id="descTitle">${Imeal.meals[i].strMeal}</h2>
        </div>
        <div class="contentDesc w-75">
            <h2>Instructions</h2>
            <p id="Instructions">${Imeal.meals[i].strInstructions}</p>
            <h2>Area :<span id="descArea">${Imeal.meals[i].strArea}</span></h2>
            <h2>Category:<span id="descCa">${Imeal.meals[i].strCategory}</span></h2>
            <h2>Recipes:</h2>
            <div id="recipes">
                <p id="recipesP">salt</p>
            </div>
            <div class="tag">
                <h2>Tags :</h2>
                <p id="tags" >${Imeal.meals[i].strTags}</p>
            </div>
            <div class="buttons">
                <button ><a >Source</a></button>
                <button class=""><a herf="${Imeal.meals[i].strYoutube}>Youtube</a></button>
            </div>
        </div>
    </div>
    `
            document.querySelector(".homeDesc").innerHTML=Icartona;
}
   }
 
 async function startAppInstructions(){
  let mealData=await  getInstructions()
displayInstructions(mealData)
}
startAppInstructions()
   

let col=document.querySelector(".my-col")
let home=document.querySelector(".home")
let homeDesc=document.querySelector(".homeDesc")
// for(let i=0; i<col.length;i++){
//     col[i].addEventListener("click",function (e) {
//         console.log(e.target);
//     })
// }

function dNone() {
    home.classList.add("d-none")
homeDesc.classList.remove("d-none")
}
col.addEventListener("click",dNone)

