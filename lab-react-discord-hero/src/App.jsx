// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DiscordHeader from './components/DiscordHeader'
import DownloadButton from './components/DownloadButton'
import ExplainerTExtHomePage from './components/ExplainerTextHomePage'
import HomePageImage from './components/HomePageImage'
import OpenInBrowserButton from './components/OpenInBrowserButton'
import TitleHomePage from './components/TitleHomePage'

function App() {

  return (
    <div className="App">
      <DiscordHeader />
      <div id="text-container">
      <TitleHomePage text="Imagine a place..."/> 
      <ExplainerTExtHomePage id="explainer-text" text="...where you can belong to a school club, gaming, group or a worldwide art community. Where just you and handful of friends can spend time together. A place that makes it easy to talk ever day and hang out more often"/>
      </div>
      <div id="buttons-and-image-container">
        <div id="buttons-container">
      <DownloadButton id="download-button" text="Download for MacOS" />
      <OpenInBrowserButton text="Open in Discord in your browser"/>
      </div>
    <HomePageImage />
      </div>
    </div>

  )
}

export default App
