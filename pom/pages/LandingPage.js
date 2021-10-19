import { Selector, t } from "testcafe"

class LandingPage{
    constructor(){
        this.loginButton = Selector('a').withExactText('Log in')
    }
}

export default new LandingPage