import React from "react";
import Footer from "../Footer/Footer";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      text: "",
    };
  }

  render() {
    return (
      <div className="contact-form">
        <form>
          <h3 className="heading"> Questions or Comments? Contact Us ! </h3>
          <input name="name" type="text" className="input" placeholder="Name" />

          <input
            name="email"
            type="text"
            className="input"
            placeholder="Email"
          />

          <textarea
            name="text"
            className="input"
            placeholder="Comment"
          ></textarea>

          <input type="submit" value="SUBMIT" />
        </form>
        <Footer />;
      </div>
    );
  }
}

export default Form;
