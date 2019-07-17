class Render {
    constructor() {

    }

    renderer(mylist,listName) {
        $(".showsdiv").empty()
        const source = $(`#${listName}-template`).html()
        const template = Handlebars.compile(source)
        const newHTML = template({ list : mylist})
        $(".showsdiv").append(newHTML)
    }
}

