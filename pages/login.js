//Initilization of Class
export class LoginPage {
  constructor(page) {
    //Defining variables
    this.page = page;
    this.email_field = page.getByLabel("Email");
    this.password_field = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: "Log in" });
  }

  //Individual Functions for every fields
  async enterEmailAddress(email) {
    await this.email_field.fill(email);
  }

  async enterPassword(password) {
    await this.password_field.fill(password);
  }

  async clickLogInBtn() {
    await this.login_button.click();
  }
}
