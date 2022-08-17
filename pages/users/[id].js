import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'
import styles from '../../styles/user.module.scss'

const User = ( { user } ) => {
    const { query } = useRouter()

    return (
        <MainContainer keywords={user.name}>

            <div className={ styles.user }>
                <h1>Пользователь с id - { query.id }</h1>
                <div>Имя пользователя - { user.name }</div>
            </div>

        </MainContainer>
    )
}

export default User


// export async function getStaticProps(context) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const user = await response.json()
//     return {
//         props: {user}, // will be passed to the page component as props
//     }
// }

export async function getServerSideProps( { params } ) {

    const response = await fetch( `https://jsonplaceholder.typicode.com/users/${ params.id }` )
    const user = await response.json()

    return {
        props: { user }, // will be passed to the page component as props
    }
}
