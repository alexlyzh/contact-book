import {Contact} from './store/reducer';
import {NO_NAME, ESC_BUTTON_KEYCODE} from './constants';

export type GroupedContacts = {
  [key: string]: Contact[],
}

export const getGroupedContacts = (contacts: Contact[]): GroupedContacts => {
  const groupedContacts: GroupedContacts = {};

  contacts.forEach((contact) => {
    const shouldBeInSpecialGroup = !/^[a-zA-Z]/.test(contact.name) || contact.name === NO_NAME;

    const groupName = shouldBeInSpecialGroup ? '#' : contact.name[0].toUpperCase();

    if (groupName in groupedContacts) {
      groupedContacts[groupName].push(contact);
      return;
    }
    groupedContacts[groupName] = [contact];
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

export const isEscKeyDown = (evt: KeyboardEvent) => evt.keyCode === ESC_BUTTON_KEYCODE;

export const debounce = (
  callback: (...params: any[]) => any,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
};
