// src/config/localization.ts
import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";

const translations: TranslationsList = {
  en: {
    headerText: "Todo Apps",
    headerForm: "TO-DO LIST",
    redux: "redux",
    zustand: "zustand",
    mongez: "mongez",
    noTodos: "No Todos Found",
    addTodo: "Add",
    addTodoPlaceholder: "Add New Todo",
  },
  ar: {
    headerText: "تطبيق المهام",
    headerForm: "قائمة المهام",
    redux: "ريدوكس",
    zustand: "زوستاند",
    mongez: "مونجيز",
    noTodos: "لا توجد مهام",
    addTodo: "إضافة",
    addTodoPlaceholder: "إضافة مهمة جديدة",
  },
};

setLocalizationConfigurations({
  /**
   * Default locale code
   *
   * @default en
   */
  defaultLocaleCode: "en",
  /**
   * Fall back locale code
   *
   * @default en
   */
  fallback: "en",
  /**
   * Set translations list
   */
  translations: translations,
});
