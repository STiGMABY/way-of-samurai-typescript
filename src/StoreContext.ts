import React from "react";
import {Store} from "redux";
import {store} from "./redux/redux-store";
import App from "./App";

export const StoreContext = React.createContext<Store>(store)

// const Provider = (props: any) => {
//     return <StoreContext.Provider value={props.store}>
//         {props.children}
//         </StoreContext.Provider>
// }
