import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {

  return<Layout/>
}

export default App;



// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
// import LandingPage from "./components/LandingPage";
// import Login from "./components/login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route path="/*" element={<Layout />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
