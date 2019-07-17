
class TempoManager {
   
   
    constructor() {
        this.watchedShowsData = []
        this.blackListData = []
        this.wishListData = []
    }





    async getDataFromDB() {
        let data = await $.get('/shows', function (res) {
            return res
        })
        console.log("hi")
        // if (cities) {
        //     // console.log(cities)
        //     this.cityData = cities
        //     // console.log(this.cityData)
        // }
        data.forEach(c => this.watchedShowsData.push(c))
        console.log(this.watchedShowsData)
    }

    watchedShows(showName) {
        $.get(`/show/${showName}`, function (response) {
            this.watchedShowsData.push(response)
        })
    }

    blackList(showName) {
        $.get(`/show/${showName}`, function (response) {
            this.blackListData.push(response)
        })
    }

    wishList(showName) {
        $.get(`/show/${showName}`, function (response) {
            this.wishListData.push(response)
        })
    }


    // $.get(`/shows`, function (response) { })


    // $.post(`/show`, Data, function (response) {
    // })

    deleteFromWatched(showName) {
        $.ajax({
            url: `/show/${showName}`,
            method: "DELETE",
            success: function () {

            }
        })
    }
}