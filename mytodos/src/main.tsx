

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./relay";
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<h1>Loading Data...</h1>}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
)
