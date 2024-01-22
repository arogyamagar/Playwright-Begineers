
import { expect, Page, Locator } from '@playwright/test';

export class Contact {
    readonly page: Page;
    readonly elements: {
        createContactButton: Locator;
    };
    constructor (page: Page) {
        this.page = page;
        this.elements = {
            createContactButton: page.getByRole('link', { name: 'Create Contact' }),
        };
    }

}
