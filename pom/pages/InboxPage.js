import { Selector, t } from "testcafe"

class InboxPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Inbox')
        this.addTaskButton = Selector('.plus_add_button')
        this.taskTitleInput = Selector('.public-DraftEditor-content')
        this.taskDescInput = Selector('.task_editor__description_field')
        this.itemDuebutton = Selector('.item_due_selector')
        this.dueTodayButton = Selector('[data-action-hint=scheduler-suggestion-today]')
        this.dueTomorrowButton = Selector('[data-action-hint=scheduler-suggestion-tomorrow]')
        this.confirmAddTaskButton = Selector('.reactist_button').withExactText('Add task')

        this.todayIcon = Selector('.date_today').withExactText('Today')
        this.tomorrowIcon = Selector('.date_tom').withExactText('Tomorrow')
        this.singleTaskButton = Selector('.task_list_item')
        this.firstChildTaskButton = Selector('.list_holder > ul > li:first-child')
        this.moreActionsButton = Selector('.more_actions_button')
        this.firstMoreActionsButton = Selector('.more_actions_button').nth(0)
        this.deleteTaskButton = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.confirmDeleteButton = Selector('.ist_button').withExactText('Delete')
        

    }

    async deleteTaskFromInbox(){
        await t
        .hover(this.singleTaskButton)
        .click(this.moreActionsButton)
        .click(this.deleteTaskButton)
        .click(this.confirmDeleteButton)
    }

    async addTenTodayTasks(){
        await t.click(this.addTaskButton)
        for (let i = 1; i <= 10; i++){
            await t
            .typeText(this.taskTitleInput, 'NewTask' + i.toString())
            .typeText(this.taskDescInput, 'New Task ' + i.toString())
            .click(this.itemDuebutton)
            .click(this.dueTodayButton)
            .click(this.confirmAddTaskButton)
        }
    }

    async deleteTenTodayTasks(){
        for (let i = 1; i <= 10; i++){
            await t
            .hover(this.firstChildTaskButton)
            .click(this.firstMoreActionsButton)
            .click(this.deleteTaskButton)
            .click(this.confirmDeleteButton)
        }    
    }

    async assertTenTasks(){
        for (let i = 0; i < 10; i++){
            await t
            .expect(this.singleTaskButton.nth(i).exists).ok()
        }
    }
}

export default new InboxPage