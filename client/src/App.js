import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateForm from "./views/CreateForm"
import Dashboard from "./views/Dashboard";
import Details from "./views/Details"
import Update from "./views/Update"
import Main from "./views/Main";



function App() {
  return (
    <div>

      <BrowserRouter>
        <h1>Product Manager</h1>
        <Link to="/products/new">Create Product</Link> |
        <Link to="/products">Dashboard</Link>

        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/products/new" element={<CreateForm />}></Route>
          <Route path="/products/" element={<Dashboard />}></Route>
          <Route path="/products/:id" element={<Details />}></Route>
          <Route path="/products/:id/edit" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
