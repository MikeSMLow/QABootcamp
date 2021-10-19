import { Selector, t } from 'testcafe'

class LoginPage{
	constructor(){
		this.usernameInput = Selector('#email')
		this.passwordInput = Selector('#password')
		this.loginButton = Selector('.submit_btn')
		this.blankPasswordLabel = Selector('.error_msg > span').withExactText('Blank password.')
		this.invalidEmailLabel = Selector('.error_msg > span').withExactText('Invalid email address.')
		this.wrongPasswordLabel = Selector('.error_msg > span').withExactText('Wrong email or password.')
	}

	async submitLoginForm(username, password){
		await t
			.typeText(this.usernameInput, username)
			.typeText(this.passwordInput, password)
			.click(this.loginButton)
	}
    
	async submitLoginFormBlankPass(username){
		await t
			.typeText(this.usernameInput, username)
			.click(this.loginButton)
	}
}

export default new LoginPage