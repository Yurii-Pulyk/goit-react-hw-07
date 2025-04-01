import { IoCall } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contact}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <IoCall className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
