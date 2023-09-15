import { Header } from "./components/header/Header";
import { RouterComponent } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <RouterComponent />
      </div>
      <GlobalStyle />
      <Reset />
    </>
  );
}

export default App;
