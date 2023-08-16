import Form from "./components/Form/Form";
import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Table />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
