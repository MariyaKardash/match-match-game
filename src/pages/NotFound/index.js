import {Header} from '../../components/Header'
import { PageName } from '../../components/styled'

export function NotFoundPage() {
    return(
    <>
        <Header/>
        <PageName>I'm so sorry, but we can't find this page. Please check your URL.</PageName>
    </>
    )
}