import { Selector } from "testcafe";

class TodayPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Today')
    }
}

export default new TodayPage