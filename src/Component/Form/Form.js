import React from "react";
import Footer from "../Footer/Footer";
import "./Form.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      text: "",
    };
  }

  // myChangeHandler = (event) => {
  //   let em = event.target.name;
  //   let val = event.target.value;
  //   if (em === "name") {
  //     alert("Enter a Valid Response");
  //   }
  //   this.setState({ [em]: val });
  // };

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
            // onChange={this.myChangeHandler}
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
// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

export default Form;
