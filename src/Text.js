function Text({ theme }) {
  return (
    <div>
      <p>I'm the text</p>
      <p>{theme ? "Dark" : "Light"}</p>
    </div>
  );
}

export default Text;
