import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Resources } from "_model/util/Locales";

type Context = GetStaticPropsContext | GetServerSidePropsContext;

const loadNamespaces = async (lng: string, ...namespaces: string[]): Promise<Resources> => {
    const fallbackLng = "en";

    const promises = namespaces.map(namespace => {
        return import(`../locales/${lng}/${namespace}.json`)
            .then(m => ({ [namespace]: m.default }))
            .catch(() => {
                console.error(`Unable to load namespace ${lng}:${namespace}`);
                return {};
            });
    });

    const resources = await Promise.all(promises).then(results => {
        return results.reduce((a, b) => ({ ...a, ...b }), {});
    });

    await i18n.use(initReactI18next).init({
        lng,
        resources: {
            [lng]: resources
        },
        ns: namespaces,
        fallbackLng,
        defaultNS: "common"
    });

    return resources ?? {};
};

const loadLocales = async (ctx: Context, ...namespaces: string[]): Promise<Resources> => {
    const lng = ctx.locale ?? "en";
    return loadNamespaces(lng, ...namespaces);
};

export default loadLocales;
