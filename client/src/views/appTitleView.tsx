import * as React from "react"
import UAppTitle from "../components/UAppTitle"
import { useAppSelector } from "../libs/hooks";
import { selectMetaDescription, selectTitle, selectTitleSuffix } from "../libs/slices/pageSlice";
import { useTranslation } from 'next-i18next';


const AppTitleView: React.FC = () => {
    const i18n = useTranslation('common');
    const pageTitle = useAppSelector(selectTitle);
    const pageTitleSuffix = useAppSelector(selectTitleSuffix);
    const pageMetaDescription = useAppSelector(selectMetaDescription)

    const title = i18n.t(pageTitle) + (pageTitleSuffix ? i18n.t(pageTitleSuffix) : '')
    const description = i18n.t(pageMetaDescription)

    return <UAppTitle title={title} description={description} />
}

export default AppTitleView