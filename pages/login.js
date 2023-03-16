//Initilization of Class
export class LoginPage {
  constructor(page) {
    //Defining variables
    this.page = page; //creating class variables for page
    this.email_field = page.getByLabel("Email");
    this.password_field = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: "Log in" });
  }

  //Individual Functions for every fields
  async loginToKeela(email, password) {
    await this.email_field.fill(email);
    await this.password_field.fill(password);
    await this.login_button.click();
  }
}
