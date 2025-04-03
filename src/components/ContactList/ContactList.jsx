import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './ContactList.module.css';
import Contact from './Contact';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters?.name);

  const filterString = typeof filter === 'string' ? filter.toLowerCase() : '';

  const visibleContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().startsWith(filterString)
      )
    : [];
  return (
    <div className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
}
