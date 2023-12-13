import React from "react";

import { Footer, Header, Loading } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
