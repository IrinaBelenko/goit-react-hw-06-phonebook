import { selectContacts, selectFilter } from 'redux/contactsSlice';
import { ContactListItem } from './ContactListItem';
import { useSelector } from 'react-redux';

const filterContacts = (contacts, filterLow) => {
  if (filterLow.trim() === '') {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLow)
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = filterContacts(contacts, filter.toLowerCase());

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
