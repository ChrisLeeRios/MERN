import React, {useState} from 'react';
import './App.css';

const sampleTabs = [
  {
    id: 1,
    content: "Tab 1 content showing here"
  },
  {
    id: 2,
    content: "Tab 2 content showing here"
  },
  {
    id: 3,
    content: "Tab 3 content showing here"
  }
]

const tabsHeader = "tabs-header-btn "


function App() {


  const [display, setDisplay] = useState()
  const [activeBtn, setActiveBtn] = useState()
  function handleTabsContentDisplay(id){
    // eslint-disable-next-line
    sampleTabs.map(tab => 
      {
        if((tab.id) === (id)){
          setActiveBtn('active-btn')
          setDisplay(tab.content)
          console.log(activeBtn)
        }
      })
}

  return (
    <>
    <div className='tabs-header'>
      {sampleTabs.map(tab => {
        return (
            <button 
            key={tab.id}
            onClick={() => handleTabsContentDisplay(tab.id)} 
            className={`${tabsHeader} ${activeBtn}`} >Tab {tab.id}
            </button>
        )
      })}
    </div>
      <div className='the-tab-content'>{display}</div>
    </>
  )
}

export default App;
