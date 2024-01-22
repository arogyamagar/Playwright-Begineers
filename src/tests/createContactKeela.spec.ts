import { test as base, expect } from '@playwright/test';
import { Contact } from '../pages/contacts.pom';

const test = base.extend({
    contact: ({ page }, use) => use(new Contact(page)),
});

test('Create a Contact at Keela', async ({ page, contact }) => {

});

