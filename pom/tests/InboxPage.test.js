import inboxPage from '../pages/InboxPage'
import commonPage from '../pages/CommonPage'
import { URLS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Inbox page feature tests')
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER)
    })

test.meta('type','smoke')('As a user I should be able to create a new task for today', async t => {
    //await t.useRole(STANDARD_USER)
    await t.click(commonPage.inboxButton)
    await commonPage.addNewTaskToday()
    await t.expect(inboxPage.todayIcon.exists).ok()
    await inboxPage.deleteTaskFromInbox()
})

test.meta('type','smoke')('As a user I should be able to create a new task for tomorrow', async t => {
    //await t.useRole(STANDARD_USER)
    await t.click(commonPage.inboxButton)
    await commonPage.addNewTaskTomorrow()
    await t.expect(inboxPage.tomorrowIcon.exists).ok()
    await inboxPage.deleteTaskFromInbox()
})

test('As a user I want to be able to create 10 tasks with due date for today', async t => {
    //await t.useRole(STANDARD_USER)
    await t.click(commonPage.inboxButton)
    await inboxPage.addTenTodayTasks()
    await inboxPage.assertTenTasks()
    await inboxPage.deleteTenTodayTasks()
})