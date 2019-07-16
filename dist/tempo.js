

class TempoManager {
    constructor() {
        this.watchedShowsData = [],
            this.blackListData = [],
            this.wishListData = []

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


    $.get(`/shows`, function (response) { })


    $.post(`/show`, Data, function (response) {
})

    deleteFromWatched()

    $.ajax({
    method: "DELETE",
    url: `/show/${showname}`,
    success: function (){}
    }) 


