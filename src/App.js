import React from "react";
import Card from "./components/Card.jsx";
import "./style/style.scss";

const App = () => {
  const handleEdit = () => {
    alert("Edit button clicked!");
  };

  const handleDelete = () => {
    alert("Delete button clicked!");
  };

  return (
    <div>
      <Card
        title="Card Title"
        content="This is some content inside the card."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
