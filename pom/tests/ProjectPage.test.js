import commonPage from '../pages/CommonPage'
import projectPage from '../pages/ProjectPage'
import { URLS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('New project page feature tests')
	.page `${URLS.LOGIN_URL}`
	.afterEach(async t => {
		await t.wait(1500)
	})

test.meta('type','smoke')('As a user I should be able to create a new project of orange color and marked as favorite', async t => {
	await t.useRole(STANDARD_USER)
	await commonPage.createNewProject()
	await t.expect(projectPage.title.exists).ok()
})