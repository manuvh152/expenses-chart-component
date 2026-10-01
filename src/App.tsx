import logo from "../src/assets/logo.svg";
import "./App.css";
import ChartBar from "./components/ChartBar";
import dataJson from "./data/data.json";

const mostSpent = dataJson.reduce((max, item) => item.amount > max.amount ? item : max);

function App() {
  return (
    <>
      <article className="expenses">
        <div className="balance">
          <div className="my-balance">
            <p style={{fontSize:'16px'}}>My balance</p>
            <h2>$921.48</h2>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="spending">
          <h2>Spending - Last 7 days</h2>
          <div className="chart">
            {dataJson.map((data) => (
              <ChartBar day={data.day} amount={data.amount} mostSpent={mostSpent.amount} key={data.day} />
            ))}
          </div>

          <hr />
          <div className="monthly">
            <div className="current-month">
              <p className="day">Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className="last-month">
              <p className="fw700">+2.4%</p>
              <p className="day">from last month</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
