

console.log(5);
setTimeout(function () {
    console.log("setTimeout=" + 1)
}, 0);
new Promise((resolve, reject) => {
    resolve(2);
    console.log(3);
}).then(
    function (params) {
        console.log(6);
    }
).then(function () {
    console.log(7);
})

console.log(4);

