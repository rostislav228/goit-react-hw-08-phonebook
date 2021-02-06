import { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

import uuid from "react-uuid";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        console.log("error");
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    addContact(contact);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={submitHandler} className={s.form}>
      <label>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="enter name"
          onChange={changeHandler}
        />
      </label>

      <label>
        Number:
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="enter number"
          onChange={changeHandler}
        />
      </label>
      <button type="submit" disabled={!name.length || !number.length}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

// changeHandler = (e) => {
//   const { name, value } = e.target;

//   setState({
//     [name]: value,
//   });
// };

// submitHandler = (e) => {
//   e.preventDefault();
//   const { name, number } = state;
//   const contact = {
//     id: uuid(),
//     name: name,
//     number: number,
//   };
//   props.addContact(contact);

//   reset();
// };

// reset = () => {
//   setState({
//     name: "",
//     number: "",
//   });
// };

//   render() {
//     const { name, number } = state;
// return (
//   <form onSubmit={submitHandler} className={s.form}>
//     <label>
//       Name:
//       <input
//         className={s.input}
//         type="text"
//         name="name"
//         value={name}
//         placeholder="enter name"
//         onChange={changeHandler}
//       />
//     </label>

//     <label>
//       Number:
//       <input
//         className={s.input}
//         type="tel"
//         name="number"
//         value={number}
//         placeholder="enter number"
//         onChange={changeHandler}
//       />
//     </label>
//     <button type="submit" disabled={!name.length || !number.length}>
//       Add contact
//     </button>
//   </form>
// );
//   }
// }

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
