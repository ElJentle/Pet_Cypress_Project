class apiHelpers {

    alphabeticInput() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    alphaNumericInput() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    numericInput() {
        var number = 0;
        var possible = 1234567890
        for (var i = 0; i < 10; i++)
            number += possible.valueOf(Math.floor(Math.random() * possible.length));
        return number;
    }

}
export default new apiHelpers();