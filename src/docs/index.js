import React from "react";
import { render } from "react-dom";
import ForexQuotes from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <ForexQuotes 
        symbols="EURUSD,GBPJPY,AUDUSD" 
        interval="10000"
        />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
