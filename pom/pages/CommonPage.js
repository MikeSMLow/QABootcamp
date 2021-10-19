import { Selector, t } from 'testcafe'
import { PROJECTNAME } from '../data/Constants'

class CommonPage{
	constructor(){
		this.inboxButton = Selector('#filter_inbox')
		this.projectsSection = Selector('.expansion_panel__header').nth(0)
		this.addProjectButton = Selector('[data-track="navigation|projects_quick_add"]')
		this.projectNameInput = Selector('#edit_project_modal_field_name')
		this.projectColorModal = Selector('.color_dropdown_toggle')
		this.projectColorOrangeButton = Selector('.color_dropdown_select__name').withExactText('Orange')
		this.favoritesToggleButton = Selector('.reactist_switch')
		this.confirmAddProjectButton = Selector('.ist_button').withExactText('Add')

		this.addTaskButton = Selector('#quick_add_task_holder')
		this.taskTitleInput = Selector('.public-DraftEditor-content')
		this.taskDescInput = Selector('.task_editor__description_field')
		this.itemDuebutton = Selector('.item_due_selector')
		this.dueTodayButton = Selector('[data-action-hint=scheduler-suggestion-today]')
		this.dueTomorrowButton = Selector('[data-action-hint=scheduler-suggestion-tomorrow]')
		this.confirmAddTaskButton = Selector('.reactist_button').withExactText('Add task')
	}

	async addNewTaskToday(){
		await t
			.click(this.addTaskButton)
			.typeText(this.taskTitleInput, 'NewTask01')
			.typeText(this.taskDescInput, 'New Task One')
			.click(this.itemDuebutton)
			.click(this.dueTodayButton)
			.click(this.confirmAddTaskButton)
	}

	async addNewTaskTomorrow(){
		await t
			.click(this.addTaskButton)
			.typeText(this.taskTitleInput, 'NewTask01')
			.typeText(this.taskDescInput, 'New Task One')
			.click(this.itemDuebutton)
			.click(this.dueTomorrowButton)
			.click(this.confirmAddTaskButton)
	}

	async createNewProject() {
		await t
			.hover(this.projectsSection)
			.click(this.addProjectButton)
			.typeText(this.projectNameInput, PROJECTNAME.NAME)
			.click(this.projectColorModal)
			.click(this.projectColorOrangeButton)
			.click(this.favoritesToggleButton)
			.click(this.confirmAddProjectButton)
	}
}

export default new CommonPage