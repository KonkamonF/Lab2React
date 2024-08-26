function App() {
  const sty = { fontFamily: 'Sans-serif',color: "white", backgroundColor: "#23272F", padding: "20px" };
  const sty1 = {
    coler: "white",
    backgroundColor: "#343A46",
    padding: "20px",
    borderRadius: "16px",
  };
  return (
    <div style={sty}>
      <h1>Quick Start</h1>
      <p>
        Welcome to the React documentation! This page will give you an
        introduction to the 80% of React concepts that you will use on a daily
        basis.
      </p>
      <div style={sty1}>
        <p style={{ fontSize: "24px" }}>You will learn</p>
        <li>How to create and nest components</li>
        <li>How to add markup and styles</li>
        <li>How to display data</li>
        <li>How to render conditions and lists</li>
        <li>How to respond to events and update the screen</li>
        <li>How to share data between components</li>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
