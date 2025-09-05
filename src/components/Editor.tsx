import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Puck, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import config from "../config/puck";



// Initial data with advanced grid example
const initialData: Data = {
  content: [],
  root: { props: {} },
};

// Save function
const save = (data: Data) => {
  // Save to localStorage for persistence
  localStorage.setItem("puck-data", JSON.stringify(data));
};

// Editor component with AI integration
export function Editor() {
  const navigate = useNavigate();
  const [currentData, setCurrentData] = useState<Data>(initialData);
  const [puckKey, setPuckKey] = useState(0);


  // Load data from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("puck-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setCurrentData(parsedData);
        setPuckKey(prev => prev + 1); // Force Puck to re-render
      } catch (error) {
        console.error("Error loading saved data on mount:", error);
      }
    }
  }, []);

  const handleLoadFromStorage = () => {
    const saved = localStorage.getItem("puck-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setCurrentData(parsedData);
        setPuckKey(prev => prev + 1); // Force Puck to re-render
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  };

  // Handle data changes from Puck editor
  const handleDataChange = (data: Data) => {
    setCurrentData(data);
  };



  const handleBackToHome = () => {
    navigate("/");
  };

  console.log(currentData);

  return (
    <div>
      {/* AI Generator Toggle */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}>
        <button
          onClick={handleLoadFromStorage}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          📁 Load Saved
        </button>
        <button
          onClick={handleBackToHome}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          🏠 Back to Home
        </button>

      </div>

      {/* Puck Editor */}
      <Puck
        key={puckKey}
        config={config}
        data={currentData}
        onPublish={save}
        onChange={handleDataChange}
      />
    </div>
  );
}