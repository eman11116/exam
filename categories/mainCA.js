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
    // *********************************************
    let imgApi=document.getElementsByClassName("imgApi");

    async function getData() {
        let  mealRes =await fetch (`https:www.themealdb.com/api/json/v1/1/categories.php        `);
       let mealData = await mealRes.json();
       console.log(mealData);

       return mealData
       }
    
       function displayData(meal) {
        let cartona="";
        for (let i=0; i<meal.categories.length;i++) {
            cartona+=`
            <div class="col-md-3 py-2 ">
                    <div id="imgApi">
                        <div class="img-meal">
                            <img class="rounded-2" src="${meal.categories[i].strCategoryThumb}"class="w-100">
                            <div class="homeCA">
                                <h2 class="">${meal.categories[i].strCategory}</h2>
                                <p>${meal.categories[i].strCategoryDescription}</p>
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
    // ***********************************************
    async function getData2() {
        let  mealRes2 =await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
       let mealData2 = await mealRes2.json();
       console.log(mealData2);

       return mealData2
       }
    
       function displayData2(meal2) {
        let cartona2="";
        for (let i=0; i<meal2.meals.length;i++) {
            cartona2+=`
            <div class="col-md-3 py-2 ">
                    <div id="imgApi">
                        <div class="img-meal">
                            <img class="rounded-2" src="${meal2.meals[i].strMealThumb}"class="w-100">
                            <div class="homeCA">
                                <h2 class="">${meal2.meals[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>
                </div>
        `
                document.querySelector(".myrow").innerHTML=cartona2;
    }
       }
     
     async function startApp2(){
      let mealData2=await  getData2()
    displayData2(mealData2)
    }
    startApp2()

// ******************************
let home=document.querySelector(".home")
let home2=document.querySelector(".home2")
let col=document.querySelector("#home")

for(let i=0;i<col.length;i++){
    col[i].addEventListener("click",function(){
        console.log("hello")
        home.classList.add("d-none")
    })
}
    // function dNone() {
    //     home.classList.add("d-none")
    // }
    // col.addEventListener("click",dNone)
   
