import { useState } from "react";
import "./App.css";
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    state: "",
    city: "",
    message: ""
  });
  const [error, setError] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    state: "",
    city: "",
    message: ""
  });
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setError({...error,[e.target.name]:`${e.target.name} is required`})
    } else {
      setError({...error,[e.target.name]:''})
    }
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form1">
        <div className="input">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
          <span style={{ color: "red" }}>{error.name}</span>
        </div>
        <div className="input">
          <label>Mobile : </label>
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
          <span style={{ color: "red" }}>{error.mobile}</span>
        </div>
        <div className="input">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
        </div>
        <div className="input">
          <label>Country : </label>
          <input
            type="text"
            name="country"
            required
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
        </div>
        <div className="input">
          <label>State : </label>
          <input
            type="text"
            name="state"
            required
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />
        </div>
        <div className="input">
          <label>City : </label>
          <input
            type="text"
            name="city"
            required
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />

        </div>
        <div className="input">
          <label>Message : </label>
          <input
            type="long text"
            name="message"
            required
            value={formData.email}
            onChange={(e) => handleOnChange(e)}
          />{' '}
          <br />

        </div>
        <div className="input">
        <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ControlledForm;


