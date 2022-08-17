import Link from 'next/link'
import A from '../components/A'
import Head from 'next/head'
import MainContainer from '../components/MainContainer'

const Index = () => {
    // <Link href="/">  // откл поведен брауз по умолчан (откл перезагрузка при переходе)
    return (
        <MainContainer keywords={'main page'}>
            {/*<Head>*/ }
            {/*    <meta keywords="nextjs, react, frontend"/>*/ }
            {/*    <title>Главная Страница</title>*/ }
            {/*</Head>*/ }

            <div>

                {/*<div className="navbar">*/ }
                {/*    <A href={ '/' } text="Главная страница"/>*/ }
                {/*    <A href={ '/users' } text="Страница Users"/>*/ }
                {/*</div>*/ }


                <h1>Main Page</h1>


            </div>
        </MainContainer>

    )
}

export default Index
