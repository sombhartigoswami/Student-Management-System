// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserList from "./Pages/UserList";
// import AddEdit from "./Pages/AddEdit";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UserList />} />
//         <Route path="/add" element={<AddEdit />} />
//         <Route path="/edit/:id" element={<AddEdit />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import AddEdit from "./Pages/AddEdit";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/edit/:id" element={<AddEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

