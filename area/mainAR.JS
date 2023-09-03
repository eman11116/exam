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
// ********************************

let imgApi=document.getElementsByClassName("imgApi");

async function getData() {
    let  mealRes =await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
   let mealData = await mealRes.json();
   console.log(mealData);

   return mealData
   }

   function displayData(meal) {
    let cartona="";
    for (let i=0; i<meal.meals.length;i++) {
        cartona+=`
        <div class="col-md-3 py-2">
                <div id="imgApi">
                    <div class="img-meal">
                    <img class="rounded-2" src="../imges/home.png" >
                        <div class="homeAR">
                            <h2 class="text-center">${meal.meals[i].strArea}</h2>
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


