import type { NextPage } from 'next'
import Head from 'next/head'
import Todo from '../components/Todo'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todo Rens Interview</title>
        <meta name="description" content="Todo Rens Interview" />
      </Head>
      <Todo />
    </div>
  )
}

export default Home
