function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if ((typeof a === 'number') && (typeof b === 'number')) {
            resolve(a + b);
        } else {
            reject('both params must be numbers');
        }
    });
}

addPromise(1, 2).then(function(n) {
    console.log("1 + 2 = " + n);
}, function(err) {
    console.log("got error: " + err);
});

addPromise(1, "2").then(function(n) {
    console.log("1 + 2 = " + n);
}, function(err) {
    console.log("got error: " + err);
});