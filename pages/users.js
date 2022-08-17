import Link from 'next/link'
import { useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer'

const Users = ( { users } ) => {
    // const [ users, setUsers ] = useState( [
    //     { id: 1, name: 'John' },
    //     { id: 2, name: 'Bob' },
    //     { id: 3, name: 'Vas' },
    // ] )


    return (
        <MainContainer keywords={'users page'}>
            <h1>List Users</h1>
            <ol>
                { users.map( user => (
                    <li key={ user.id }>
                        <Link href={ `/users/${ user.id }` }>
                            <a>{ user.name }</a>
                        </Link>
                    </li>
                ) ) }
            </ol>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps( context ) {
    const response = await fetch( `https://jsonplaceholder.typicode.com/users` )
    const users = await response.json()

    return {
        props: { users }, // will be passed to the page component as props
    }
}
