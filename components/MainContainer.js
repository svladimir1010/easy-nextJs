import Head from 'next/head'
import React from 'react'
import A from './A'

const MainContainer = ( { children, keywords } ) => {
    return (
        <>
            <Head>
                <meta keywords={ 'nextjs, frontend' + keywords }/>
                <title>Главная Страница</title>
            </Head>

            <div className="navbar">
                <A href={ '/' } text="Главная страница"/>
                <A href={ '/users' } text="Страница Users"/>
            </div>

            <div>
                { children }
            </div>

            <style jsx>
                { `
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }

                ` }
            </style>
        </>
    )
}

export default MainContainer
