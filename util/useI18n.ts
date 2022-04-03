import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useRouter } from "next/router";
import { ResourceProp } from "_model/util/Locales";

const useI18n = (props: ResourceProp): typeof i18n => {
    const resources = props.resources ?? {};
    const { locale } = useRouter();
    const lng = locale ?? "en";

    if (typeof i18n.getResourceBundle === "undefined") {
        i18n.use(initReactI18next).init({
            resources: { [locale!]: resources },
            lng,
            fallbackLng: "en",
            defaultNS: "common",
            interpolation: { escapeValue: false },
            react: { useSuspense: false }
        });
    }

    Object.keys(resources).forEach(namespace => {
        if (!i18n.getResourceBundle(lng, namespace)) {
            i18n.addResourceBundle(lng, namespace, resources[namespace]);
        }
    });

    if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
    }

    return i18n;
};

export default useI18n;
