import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCreateFromScratch = () => {
    navigate("/editor");
  };

  const handleChooseTemplate = () => {
    navigate("/templates");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "60px 40px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "600px",
        width: "100%",
        position: "relative",
      }}>
        {/* Language Switcher */}
        <div style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}>
          <LanguageSwitcher />
        </div>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {t('landingPage.title')}
        </h1>
        
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}>
          {t('landingPage.subtitle')}
        </p>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <button
            onClick={handleCreateFromScratch}
            style={{
              backgroundColor: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "20px 40px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              minWidth: "200px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
            }}
          >
            🚀 {t('landingPage.createFromScratch')}
          </button>

          <button
            onClick={handleChooseTemplate}
            style={{
              backgroundColor: "#764ba2",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "20px 40px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(118, 75, 162, 0.3)",
              minWidth: "200px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(118, 75, 162, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(118, 75, 162, 0.3)";
            }}
          >
            🎨 {t('landingPage.chooseTemplate')}
          </button>
        </div>

        <div style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          border: "1px solid #e9ecef",
        }}>
          <h3 style={{
            margin: "0 0 10px 0",
            color: "#333",
            fontSize: "1.1rem",
          }}>
            ✨ {t('landingPage.features')}
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
            fontSize: "0.9rem",
            color: "#666",
          }}>
            <div>🎯 {t('landingPage.dragDrop')}</div>
            <div>📱 {t('landingPage.responsive')}</div>
            <div>🎨 {t('landingPage.beautifulTemplates')}</div>
            <div>⚡ {t('landingPage.fastLoading')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
