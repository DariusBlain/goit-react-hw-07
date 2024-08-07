import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={s.listItem}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
