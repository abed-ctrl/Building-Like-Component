import "./App.css";
import Like from "./components/Like";

const App = () => {
  return (
    <div>
      <Like size={60} onClick={(liked: boolean) => console.log(liked)} />
    </div>
  );
};

export default App;
