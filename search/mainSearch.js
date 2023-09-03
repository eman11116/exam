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


// **********search by name ***********/
let SByName =document.getElementById("SByName");
async function SgetData(Search) {
    let  SmealRes =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
   let SmealData = await SmealRes.json();
   return SmealData
   }
   function SdisplayData(Smeal) {
    let Scartona="";
    for (let i=0; i<Smeal.meals.length;i++) {
        Scartona+=`
        <div class="col-md-3 py-2 ">
                <div id="input">
                    <div class="img-meal">
                        <img class="rounded-2" src="${Smeal.meals[i].strMealThumb}"class="w-100">
                        <div class="home-content">
                            <p class="mx-2">${Smeal.meals[i].strMeal}</p>
                        </div>
                    </div>
                </div>
            </div>
    `
            document.querySelector(".rowSeach").innerHTML=Scartona;
}
   }
   async function SstartApp(Smeal){
    let SmealData=await  SgetData(Smeal)
  SdisplayData(SmealData)
  }
  SstartApp()
  SByName.addEventListener("input",function () {
    SstartApp( SByName.value)

  })
/****************search by frist litter********** */
let SFByFName =document.getElementById("SFByName");
async function SFgetData(SFearch) {
    let  SFmealRes =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${SFearch}`);
   let SFmealData = await SFmealRes.json();
   return SFmealData
   }

   function SFdisplayData(SFmeal) {
    let SFcartona="";
    for (let i=0; i<SFmeal.meals.length;i++) {
        SFcartona+=`
        <div class="col-md-3 py-2 ">
                <div id="input">
                    <div class="img-meal">
                        <img class="rounded-2" src="${SFmeal.meals[i].strMealThumb}"class="w-100">
                        <div class="home-content">
                            <p class="mx-2">${SFmeal.meals[i].strMeal}</p>
                        </div>
                    </div>
                </div>
            </div>
    `
            document.querySelector(".rowSeach").innerHTML=SFcartona;
}
   }
   async function SFstartApp(SFmeal){
    let SFmealData=await  SgetData(SFmeal)
  SFdisplayData(SFmealData)
  }
  SFstartApp()
  SFByFName.addEventListener("input",function () {
    SstartApp( SFByFName.value)

  })


