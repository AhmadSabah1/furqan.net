import {unstable_setRequestLocale} from 'next-intl/server';
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export default function LocaleLayout({children, params: {locale}}) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale} >
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}

const locales = ['en', 'da'];

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}
