// import s from './contact-list.module.scss';

const ContactList = ({ contacts }) => {
  const contactItems = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ));

  return <ul>{contactItems}</ul>;
};

export default ContactList;
