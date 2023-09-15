import { RouterComponent } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";

function App() {
  return (
    <>
      <RouterComponent />
      <GlobalStyle />
      <Reset />
    </>
  );
}

export default App;
