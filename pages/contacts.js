export class ContactPage {
  constructor(page) {
    this.page = page;
    this.email_field = page.getByLabel("Email");
    this.password_field = page.getByLabel("Password");
    this.login_btn = page.getByRole("button", { name: "Log in" });
    this.contact_link = page.getByRole("link", { name: " Contacts" });
    this.add_btn = page.getByRole("button", { name: "Add Contact" });
    this.save_btn = page.getByRole("button", { name: "Save" });
    this.firstname_field = page.getByLabel("FIRST NAME");
  }
  async createaNewContact(email, password, fname) {
    await this.page.getByLabel("Email").fill(email);
    await this.password_field.fill(password);
    await this.login_btn.click();
    await this.contact_link.click();
    await this.add_btn.click();
    await this.firstname_field.fill(fname);
    await this.save_btn.click();
  }
}
