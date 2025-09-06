import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Puck, type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { createLocalizedPuckConfig } from "../config/puck-localized";
import { LanguageSwitcher } from "./LanguageSwitcher";



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
  const { t, i18n } = useTranslation();
  const [currentData, setCurrentData] = useState<Data>(initialData);
  const [puckKey, setPuckKey] = useState(0);
  
  // Create localized config that updates when language changes
  const config = createLocalizedPuckConfig(t);


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

  // Force Puck to re-render when language changes
  useEffect(() => {
    setPuckKey(prev => prev + 1);
  }, [i18n.language]);

  // Handle data changes from Puck editor
  const handleDataChange = (data: Data) => {
    setCurrentData(data);
  };



  const handleBackToHome = () => {
    navigate("/");
  };

  const handlePreview = () => {
    navigate("/preview");
  };

  console.log(currentData);

  const isRTL = i18n.language === 'ar';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* AI Generator Toggle */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: "10px" }}>
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
          🏠 {t('editor.backToHome')}
        </button>
        <button
          onClick={handlePreview}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          👁️ {t('editor.preview')}
        </button>
        </div>
        
        <LanguageSwitcher />
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