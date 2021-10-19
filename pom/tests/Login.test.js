import loginPage from '../pages/LoginPage'
import todayPage from '../pages/TodayPage'
import { CREDENTIALS, URLS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Login feature tests')
    .page `${URLS.LOGIN_URL}`

test('As a user I should be able to login succesfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(todayPage.title.exists).ok()
})

test('As a user I should not be able to login when no password is specified', async t => {
    await loginPage.submitLoginFormBlankPass(CREDENTIALS.STANDARD_USER.USERNAME)
    await t.expect(loginPage.blankPasswordLabel.exists).ok()
})

test('As a user I should not be able to login when the email address format is invalid', async t => {
    await loginPage.submitLoginForm('username1','password12345')
    await t.expect(loginPage.invalidEmailLabel.exists).ok()
})

test('As a user I should not be able to login when the entered password is invalid', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,'password12345')
    await t.expect(loginPage.wrongPasswordLabel.exists).ok()
})