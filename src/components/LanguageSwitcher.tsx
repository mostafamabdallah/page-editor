import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    }}>
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('en')}
        style={{
          minWidth: '40px',
          padding: '4px 8px',
        }}
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('ar')}
        style={{
          minWidth: '40px',
          padding: '4px 8px',
        }}
      >
        عربي
      </Button>
    </div>
  );
}
