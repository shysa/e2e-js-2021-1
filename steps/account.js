import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.root = 'https://pinteo.ru';
	}

	auth() {
		this.open(this.root + '/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
	}

	getAuthorized() {
		return this.page.getAuthorized(this.root);
	}

	logout() {
		this.page.logout();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
