import React, { useEffect, useState } from "react";
import BoxModel from "../models/BoxModel";
import "./FormView.css";

const FormView = () => {
  const [receiverName, setReceiverName] = useState("");
  const [weight, setWeight] = useState(0);
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [destinationCountry, setDestinationCountry] = useState("Sweden");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!receiverName || weight === null || !destinationCountry) {
      setError("All fields are required.");
      return;
    }

    if (weight < 0) {
      setError("Weight cannot be negative. Defaulting to 0.");
      setWeight(0);
      return;
    }

    const newBox = new BoxModel(
      receiverName,
      weight,
      boxColor,
      destinationCountry
    );

    newBox.save();

    setReceiverName("");
    setWeight(0);
    setBoxColor("#ffffff");
    setDestinationCountry("Sweden");
    setError("");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Box</h2>
      {error && <p className="form-error">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Receiver Name:
          <input
            type="text"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Box Color:
          <input
            type="color"
            value={boxColor}
            onChange={(e) => setBoxColor(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Destination Country:
          <select
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
            className="form-select"
          >
            {Object.keys(BoxModel.countries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div className="save-button-container">
        <button type="submit" className="form-button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormView;
