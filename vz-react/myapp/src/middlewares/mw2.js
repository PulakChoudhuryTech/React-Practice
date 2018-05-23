function mw2(store) {
    return function (next) {
        return function (action) {
            console.log("mw2 : middle ware");
            console.log("mw2", store);
            next(action);
        }
    }
}

export default mw2;