function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

async function execute() {
    wearPPE().then(result => console.log(result));
    await sleep(3000);
    fightCorona().then(result => console.log(result));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

execute();
