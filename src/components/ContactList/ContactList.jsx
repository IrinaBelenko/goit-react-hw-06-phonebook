import { selectContacts } from 'redux/contactsSlice';
import { ContactListItem } from './ContactListItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
