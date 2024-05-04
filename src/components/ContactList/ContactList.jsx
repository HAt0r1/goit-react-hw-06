import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  console.log(contacts);
  return (
    <ul className={style.list}>
      {contacts.map((contact) => {
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
