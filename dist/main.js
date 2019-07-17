const tempMeneger = new TempManager
const render = new Render



const blackListLoadPage = async function () {
    await tempMeneger.blackListDB()
    const d = tempMeneger.blackList
    await render.renderer(d)
}


const watchedShowsLoadPage = async function () {
    await tempMeneger.watchedShowsDB()
    const d = tempMeneger.watchedShows
    await render.renderer(d)
}


const wishListLoadPage = async function () {
    await tempMeneger.wishListDB()
    const d = tempMeneger.wishList
    await render.renderer(d)
}

//////////////////////////////////////////////////////////////////////

const showSearch = async function () {
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    const d = tempMeneger.standby
    await render.renderer(d)
}

///////////////////////////////////////////////////
$("body").on("click", ".blackListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.blackListSave(name)
})

$("body").on("click", ".watchedShowButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.watchedShowSave(name)
})

$("body").on("click", ".wishListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.wishListSave(name)
})

///////////////////////////////////////////

// $("body").on("click", ".deletebutton", function () {
//     const name = $(this).siblings('h2').text()
//     tempMeneger.removeCity(name)
//     location.reload()
// })



////////FOR STYLE DO NOT TOUCH !!!!
function myFunction(x) {
    x.classList.toggle("change");
  }

  let a = 0
$(".bar1").click(function(){
    if(a===0){

      a=1
        $('div.menu').addClass("activated")
    }
    else{
        a=0
        $('div.menu').removeClass("activated")
    }
    
})
$(".bar2").click(function(){
    if(a===0){

      a=1
        $('div.menu').addClass("activated")
    }
    else{
        a=0
        $('div.menu').removeClass("activated")
    }
    
})
$(".bar3").click(function(){
    if(a===0){

      a=1
        $('div.menu').addClass("activated")
    }
    else{
        a=0
        $('div.menu').removeClass("activated")
    }
    
})
///////////////////////////////////