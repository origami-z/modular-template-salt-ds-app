import * as React from "react";
import { Button } from "@jpmorganchase/uitk-core";
import { AddIcon, RemoveIcon } from "@jpmorganchase/uitk-icons";
import { Card, Panel } from "@jpmorganchase/uitk-lab";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Panel>
        <Card>
          <h1>Welcome to your new app!</h1>
        </Card>
      </Panel>
      <Panel>
        <h1>
          <Button onClick={() => setCount((x) => x + 1)}>
            <AddIcon />
          </Button>{" "}
          Counter {count}{" "}
          <Button onClick={() => setCount((x) => x - 1)}>
            <RemoveIcon />
          </Button>
        </h1>
      </Panel>
    </div>
  );
};

export default App;
