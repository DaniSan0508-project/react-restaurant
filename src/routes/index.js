import { Switch, Route } from "react-router";
import Provider from "../contexts/pratos";
import { Menu } from "../pages/Menu";

export function Routes(){
    return(
        <Provider>
            <Switch>
                <Route component={Menu} path="/" exact/>
            </Switch>
        </Provider>
    )
} 