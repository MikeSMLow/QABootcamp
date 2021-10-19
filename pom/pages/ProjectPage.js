import { Selector, t } from "testcafe";
import { PROJECTNAME } from "../data/Constants"

class ProjectPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText(PROJECTNAME.NAME)
    }
}

export default new ProjectPage