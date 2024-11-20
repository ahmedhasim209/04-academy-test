import { useTranslation } from "react-i18next";

const SwitchLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = i18n.dir(lng);
  };
  const { t } = useTranslation();

  return (
    <div className="language-switcher">
      <button className="language-button" onClick={() => changeLanguage("en")}>
        {t("English")}
      </button>
      <button className="language-button" onClick={() => changeLanguage("ar")}>
        {t("Arabic")}
      </button>
    </div>
  );
};

export default SwitchLang;
