import { trans } from "@mongez/localization";

import avatar from "../../../assets/avatar2.svg";

type AppHeaderProps = {
  language: string;
  changeLanguage: (lang: string) => void;
};

function AppHeader(props: AppHeaderProps) {
  const toggleLanguageMenu = () => {
    const menu = document.querySelector(".language-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }

    menu?.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  };

  return (
    <div className="my-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">{trans("headerText")}</h1>
      <div className="flex items-center gap-5">
        {/* Language Menu */}
        <div className="relative">
          <button
            className="flex items-center gap-1"
            onClick={toggleLanguageMenu}
          >
            <span className="text-sm font-semibold">
              {props.language === "en" ? "English" : "العربية"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="language-menu absolute top-10 right-0 shadow-md rounded-md hidden">
            <button
              onClick={() => props.changeLanguage("en")}
              className="w-full text-left"
            >
              EN
            </button>
            <button
              onClick={() => props.changeLanguage("ar")}
              className="w-full text-left"
            >
              AR
            </button>
          </div>
        </div>

        {/* Avatar */}
        <div className="transition-all hover:bg-slate-600 rounded-full w-16 h-16 grid place-content-center">
          <img
            src={avatar}
            className="cursor-pointer w-14 h-14 rounded-full"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
