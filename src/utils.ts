import {Contact} from './store/reducer';

export type GroupedContacts = {
  [key: string]: Contact[],
}
export const getGroupedContacts = (contacts: Contact[]): GroupedContacts => {
  const groupedContacts: GroupedContacts = {};

  contacts.forEach((contact) => {
    const firstLetter = contact.name[0];
    if (firstLetter in groupedContacts) {
      groupedContacts[firstLetter].push(contact);
      return;
    }
    groupedContacts[firstLetter] = [contact];
  });

  return groupedContacts;
};

export const sortContacts = (contacts: Contact[]) => {
   return [...contacts].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })
};
