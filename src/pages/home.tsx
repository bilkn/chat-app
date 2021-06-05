import React from 'react'
import { Header } from '../components'

function Home() {
  return (
    <>
      <Header>
        <Header.SearchBox><Header.Input type="search" placeholder="Search for messages or contacts" /></Header.SearchBox>
      </Header>
    </>
  )
}

export default Home
