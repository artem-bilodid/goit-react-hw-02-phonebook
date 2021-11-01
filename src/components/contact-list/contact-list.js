import s from './contact-list.module.scss';

const ContactList = ({ contacts, handleDelete }) => {
  const contactItems = contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <div className={s.textContainer}>
        <span>
          {name}: {number}
        </span>
        <button id={id} className={s.button} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul className={s.list}>{contactItems}</ul>;
};

export default ContactList;
