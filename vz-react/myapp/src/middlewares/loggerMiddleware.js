function loggerMiddleWare(store) {
    return function (next) {
        return function (action) {
            console.log("logger middle ware");
            console.log("logger", store);
            next(action);
        }
    }
}

export default loggerMiddleWare;