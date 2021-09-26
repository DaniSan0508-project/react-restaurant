import { Switch, Route } from "react-router";
import Provider from "../contexts/pratos";
import { Carrinho } from "../pages/Carrinho";
import { Menu } from "../pages/Menu";

export function Routes(){
    return(
        <Provider>
            <Switch>
                <Route component={Menu} path="/" exact/>
                <Route component={Carrinho} path="/carrinho" exact/>
            </Switch>
        </Provider>
    )
} 