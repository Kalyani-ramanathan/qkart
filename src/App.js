import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import Products from "./components/Products";
import theme from "./theme";
import {Route,Switch,Link} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";



export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
          <Switch>
          
          <ThemeProvider theme={theme}>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Products />
            </Route>

          </ThemeProvider>
          </Switch>

        
    </div>
  );
}

export default App;