import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating.jsx";
// import Test from "./components/Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} />
    <StarRating maxRating={5} size={24} color="red" className="test" />
    <Test /> */}
  </StrictMode>
);
