import { Role } from 'testcafe'
import { URLS, CREDENTIALS } from './Constants'
import loginPage from '../pages/LoginPage'
import landingPage from '../pages/LandingPage'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await t.click(landingPage.loginButton)
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true })