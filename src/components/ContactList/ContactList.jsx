import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';

import css from './ContactList.module.css';
import Contact from './Contact';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters?.name);

  // const filterString = typeof filter === 'string' ? filter.toLowerCase() : '';

  const visibleContacts = useSelector(selectFilteredContacts);
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
