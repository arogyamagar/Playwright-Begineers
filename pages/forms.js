export class FormPage {
  constructor(page) {
    this.page = page;
    this.form_btn = page.getByRole("link", { name: " Forms" });
    this.createNew_btn = page.getByRole("button", { name: "Create New " });
    this.newFormBuilder_btn = page.getByText("New Form Builder");
    this.donation_btn = page.getByRole("link", {
      name: " Donation Form donation-form.svg Allow contacts to donate to your organization online.",
    });
    this.form_format = page.getByRole("link", {
      name: "Stand-alone stand-alone-format Create a form on a standalone page that you can share with a link.",
    });
    this.next_btn = page.getByRole("button", { name: "Next" });
    this.form_name = page.getByLabel("Form Name");
    this.save_btn = page.getByRole("button", { name: "Save" });
  }

  async formCreation() {
    await this.form_btn.click();
    await this.createNew_btn.click();
    await this.newFormBuilder_btn.click();
    await this.donation_btn.click();
    await this.next_btn.click();
    await this.form_format.click();
    await this.next_btn.click();
    await this.next_btn.click();
  }

  async fillFormName(formName) {
    await this.form_name.fill(formName);
    await this.save_btn.click();
  }
}
