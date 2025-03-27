const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

slowSum(1, 5).then((result : number) => {
    console.log(result);
});
(async () => {
    const sum = await slowSum(1, 5);
    const result = await slowMult(sum, 2);
    console.log(result);
})();

const slowDiv = (a: number, b:number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("You cannot divide by zero"));
            } else {
                resolve(a/b);
            };
        }, 2000);
    });
};

slowDiv(6, 3).then((result: number) => {
    console.log(result);
});
slowDiv(6, 0).then((result: number) => {
    console.log(result);
}).catch((error) => console.log(error.message));