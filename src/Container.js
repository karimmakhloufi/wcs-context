import Text from "./Text";

function Container({ theme }) {
  return (
    <div className="App">
      <h2>Container Component</h2>
      <Text theme={theme} />
    </div>
  );
}

export default Container;
