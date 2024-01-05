import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from "next-intl";

interface pageProps {
    params: { locale: string }
}

export default function page({params: {locale}}: pageProps) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('Index');
    return <div>
        {t("title")}
    </div>
}

