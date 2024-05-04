import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.app}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
