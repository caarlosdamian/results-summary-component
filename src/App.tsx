import "./App.scss";
import { Stats } from "./components/stats/Stats";
import { statsInfo } from "./utils";

function App() {
  return (
    <main className="App">
      <section className="main">
        <section className="left">
          <h1 className="left__header">Your Result</h1>
          <div className="left__circle">
            <h1 className="left__circle--header">79</h1>
            <h3 className="left__circle--subtitle">of 100</h3>
          </div>
          <h3 className="left__subtitle">Great</h3>
          <p className="left__description">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </section>
        <section className="right">
          <h1 className="right__header">Summary</h1>
          {statsInfo.map(({ label, id, img, className, amount }) => (
            <Stats
              amount={amount}
              key={id}
              label={label}
              className={className}
              img={img}
            />
          ))}
          <button className="right__button">Continue</button>
        </section>
      </section>
    </main>
  );
}

export default App;
