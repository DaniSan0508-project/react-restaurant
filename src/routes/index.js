import { Switch, Route } from "react-router";
import { Home } from "../pages/Home";

export function Routes(){
    return(
        <Switch>
            <Route component={Home} path="/" exact/>
        </Switch>
    )
} 