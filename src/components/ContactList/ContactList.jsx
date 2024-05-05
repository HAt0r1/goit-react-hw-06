import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selector";
import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filterContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={style.list}>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id} className={style.listItem}>
            <Contact info={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
