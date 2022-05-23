import "./styles.css";
import React from "react";
// import Capital from "./Capital";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEmpty: false,
      data: [
        {
          abbr: "AL",
          name: "Alabama",
          capital: "Montogomery"
        },
        {
          abbr: "AK",
          name: "Alaska",
          capital: "Juneau"
        },
        {
          abbr: "Ny",
          name: "NewYork",
          capital: "NewyorkCity"
        },
        {
          abbr: "PA",
          name: "Pennsylvania",
          capital: "Harrisburg"
        }
      ]
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...this.state.data];
    if (
      e.target.sabbr.value !== "" &&
      e.target.sname.value !== "" &&
      e.target.capital.value !== ""
    ) {
      console.log(e.target.value);
      newData.push({
        abbr: e.target.sabbr.value,
        name: e.target.sname.value,
        capital: e.target.capital.value
      });

      this.setState({
        isEmpty: false,
        data: newData
        // e.target.value =''
      });
      e.target.sabbr.value = "";
      e.target.sname.value = "";
      e.target.capital.value = "";
    } else {
      this.setState({ isEmpty: true });
    }
  };
  render() {
    const { data, isEmpty } = this.state;

    return (
      <div>
        <h1>United States Of America</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sabbr">State abbr:</label>
          <input type="text" name="sabbr" />
          <label htmlFor="sname">State name:</label>
          <input type="text" name="sname" />
          <label htmlFor="capital">Capital:</label>
          <input type="text" name="capital" />
          <input type="submit" value="Submit" />
        </form>

        {/* <input onChange={this.handleChange} value={this.state.inputValue} /> */}
        {/* <button onClick={this.handleSubmit}>Submit</button> */}
        <table>
          <thead>
            <tr className="first-tr">
              <th>State (abbr)</th>
              <th>State Name</th>
              <th>Capital </th>
            </tr>
          </thead>
          <tbody>
            {data.map((message) => {
              return (
                <tr>
                  <th>{message.abbr}</th>
                  <th>{message.name}</th>
                  <th>{message.capital}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="btn">
          {isEmpty ? <h2 id="error"> Please fill out all the inputs</h2> : null}
        </div>
      </div>
    );
  }
}
export default App;

// https://codesandbox.io/s/6-send-a-message-d4szq?file=/src/App.jsx
