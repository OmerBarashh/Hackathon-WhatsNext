const tempManager = new TempoManager
const render = new Render


const loadPage = async function () {
    await tempManager.getDataFromDB()
    render.renderer(tempManager.watchedShowsData,'watchedShowsData')
    console.log(tempManager.watchedShowsData)
}

const handleSearch = async function () {
    $('#container').empty()
    let input = $("#cityInput").val()
    await tempManager.getCityData(input)
    render.renderer(tempManager.watchedShowsData)
    // console.log(tempManager.cityData)
}

$('body').on('click', '#search', function () {
    handleSearch()

})

$('body').on('click', '.savebutton', function () {
    let name = $(this).siblings('h2').text().slice(1)
    tempManager.saveCity(name)
    console.log(name)
})

$('body').on('click', '.deletebutton', function () {
    console.log("remove")
    let name = $(this).siblings('h2').text().slice(1)
    console.log(name)
    tempManager.removeCity(name)
})

loadPage()







// let inputt = document.getElementById("cityInput");
// // Execute a function when the user releases a key on the keyboard
// inputt.addEventListener("keyup", function (event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     // event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("search").click();
//   }
// });