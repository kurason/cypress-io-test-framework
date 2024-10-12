import BasePage from "./cypress/pages/basePage"
//var - wielokrotna zmienna
//let - unique
//const - stala

let myName = 'Krzysiek'
const myConstansName = 'Andrzej'

class Main extends BasePage {

    //bo dziedziczymy
    constructor() {
        super()
    }

    logText(num) {

        // zasieg blokowy
        let myNum = 45


        let myFun = () => {

            //zasieg fun

            let funcNum = 33
        }

        console.log(funcNum)
        console.lognum

        }

}

new Main().logText()

//JSON.parse

//rozny sposob deklarowania zmiennych w obiekcie
// let obj = {

//     user: 'Krzysztof',
//     'age' : 41



// }

// obj.user
// obj['age']
