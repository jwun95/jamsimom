import TitleHeader from "../../components/TitleHeader/TitleHeader"
import * as styles from './TitleLayout.styles'


const TitleLayout = (props) => {
    return (
        <>
            <TitleHeader title={ props.title } />
            <styles.Main>{ props.children }</styles.Main>
        </>
    )
}

export default TitleLayout