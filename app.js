function domGenerator() {

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    let arrs = [pronoun, adj, noun];

    let doms = ['com', 'net', 'us', 'io', 'uy', 'es', 'ar'];
    
    for (let i = 0; i < arrs[0].length; i++) {
        for (let j = 0; j < arrs[1].length; j++) {
            for (let k = 0; k < arrs[2].length; k++) {
                let ranDom = Math.floor(Math.random() * doms.length)
                console.log(arrs[0][i] + arrs[1][j] + arrs[2][k] + "." + doms[ranDom]);
            }
        }
    }
}

console.log(domGenerator())
// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com