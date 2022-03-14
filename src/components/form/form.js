import React from "react";
import "./form.css";

class Form extends React.Component {
  state = {
    name: null,
    datetime: null,
    destCount: 1,
    paymentType: "cash",
    driverName: "Wizzy",
    price: null,
    discount: "20%",
    description: null,
  };

  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const URL =
      "https://script.google.com/macros/s/AKfycbzK_iwbEcdkQrTmsjbXbrHxpLg9lWx-6RBy9-Oe1O2bzpwA4L9QQ2SF8qEJmrQ5A36N/exec";
    const submitButton = document.querySelector("button");
    submitButton.disabled = true;
    let requestBody = new FormData();
    const keys = Object.keys(this.state);
    keys.map((key) => requestBody.append(key, this.state[key]));
    fetch(URL, { method: "POST", body: requestBody })
      .then((response) => {
        submitButton.disabled = false;
        alert("Success!", response);
      })
      .catch((error) => {
        submitButton.disabled = false;
        alert("Error!", error.message);
      });
  };

  setDate = () => {
    const [date, time] = formatDate(new Date()).split(" ");
    const datetimeLocalInput = document.getElementById("datetime-local");
    datetimeLocalInput.value = date + "T" + time;
    this.setState(
        {
            datetime: date + "T" + time
        }
    )
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    function formatDate(date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join("-") +
        " " +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
        ].join(":")
      );
    }
  };

  render() {
    return (
      <form name="form" className="form" onSubmit={this.handleSubmit}>
        <div className="section">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange.bind(this, "name")}
          />
        </div>
        <div className="section">
          <label>Date/Time</label>
          <div className="flex">
            <input
              id="datetime-local"
              name="datetime"
              type="datetime-local"
              style={{ width: "80%" }}
              required
              onChange={this.handleChange.bind(this, "datetime")}
            />
            <a onClick={this.setDate}>Now</a>
          </div>
        </div>
        <div className="section flex">
          <div>
            <label>Destination Count</label>
            <select
              name="destCount"
              required
              onChange={this.handleChange.bind(this, "destCount")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
            <label>Payment Type</label>
            <select
              required
              name="paymentType"
              onChange={this.handleChange.bind(this, "paymentType")}
            >
              <option>Cash</option>
              <option>Naira Transfer</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
            </select>
          </div>
        </div>
        <div className="section">
          <label>Driver's Name</label>
          <select
            name="driverName"
            value={this.state.driverName}
            required
            onChange={this.handleChange.bind(this, "driverName")}
          >
            <option>Wizzy</option>
            <option>Dazzy</option>
          </select>
        </div>
        <div className="section flex">
          <div>
            <label>Price</label>
            <input
              name="price"
              required
              onChange={this.handleChange.bind(this, "price")}
              type="number"
            ></input>
          </div>
          <div>
            <label>Discount</label>
            <select
              name="discount"
              required
              onChange={this.handleChange.bind(this, "discount")}
            >
              <option>10%</option>
              <option>20%</option>
              <option>30%</option>
            </select>
          </div>
        </div>
        <div className="section">
          <label>Description or Details</label>
          <textarea
            name="description"
            required
            onChange={this.handleChange.bind(this, "description")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
