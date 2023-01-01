import { Button, Link, SaltProvider } from "@salt-ds/core";
import { AddIcon, RemoveIcon } from "@salt-ds/icons";
import { Card, Panel } from "@salt-ds/lab";
import * as React from "react";
import { Nav } from "./components/Nav";

import "./App.css";

const App = (): JSX.Element => {
  const [selectedMode, setSelectedMode] = React.useState<"light" | "dark">(
    "light"
  );

  const [count, setCount] = React.useState(0);
  return (
    <SaltProvider mode={selectedMode} applyClassesTo="root">
      <div className="App">
        <Nav
          theme={selectedMode}
          onThemeChange={(newTheme) => setSelectedMode(newTheme)}
        />
        <Panel>
          <Card>
            <h1>Welcome to your new app!</h1>
          </Card>
        </Panel>
        <Panel>
          <Card>
            <h2>
              Check Salt DS's{" "}
              <Link href="https://www.saltdesignsystem.com" target="_blank">
                website
              </Link>{" "}
              and{" "}
              <Link
                href="https://github.com/jpmorganchase/salt-ds"
                target="_blank"
              >
                GitHub
              </Link>
            </h2>
          </Card>
        </Panel>
        <Panel>
          <Card>
            <h1>
              <Button onClick={() => setCount((x) => x - 1)}>
                <RemoveIcon />
              </Button>{" "}
              Counter {count}{" "}
              <Button onClick={() => setCount((x) => x + 1)}>
                <AddIcon />
              </Button>
            </h1>
          </Card>
        </Panel>
      </div>
    </SaltProvider>
  );
};

export default App;
