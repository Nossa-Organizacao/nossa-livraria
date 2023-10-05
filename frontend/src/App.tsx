import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer
          position="top-right"
          autoClose={550}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <Reset />
    </>
  );
}

export default App;
