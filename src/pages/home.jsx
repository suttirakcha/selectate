import { useEffect } from "react";
import { useState } from "react"
import ColorPicker from "../components/color-picker";
import SidebarSettings from "../components/sidebar-settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateLeft, faChevronDown, faChevronUp, faCircleDot, faGear, faHeading, faList, faPlus, faShuffle, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import LeftSidebar from "../components/left-sidebar";
import RightSidebar from "../components/right-sidebar";
import SidebarButton from "../components/sidebar-button";

export default function Home(){
  const shuffleArray = (arr) => {
    arr.sort(() => Math.random() - 0.5)
    return arr
  };

  const [title, setTitle] = useState('')
  const [titleColor, setTitleColor] = useState('black')
  const [lists, setLists] = useState([])
  const [color, setColor] = useState('black')
  const [borderColor, setBorderColor] = useState('black')
  const [bgColor, setBgColor] = useState('white')
  const [enabledList, setEnabledList] = useState()

  const initialValue = {
    title: '',
    titleColor: 'black',
    lists: [],
    color: 'black',
    borderColor: 'black',
    bgColor: 'white'
  }

  const [updatedInfo, setUpdatedInfo] = useState(initialValue)
  const [openSidebar, setOpenSidebar] = useState(true)
  const [menu, setMenu] = useState('Title')
  const [settingsAnim, setSettingsAnim] = useState(false)

  const handleChangeMenu = (changeMenu) => {
    if (menu === changeMenu){
      e.preventDefault()
    }
    setSettingsAnim(true)
    setTimeout(() => setMenu(changeMenu), 150)
    setTimeout(() => setSettingsAnim(false), 300)
  }

  useEffect(() => {
    localStorage.getItem('title')
    localStorage.getItem('titleColor')
    localStorage.getItem('lists')
    localStorage.getItem('color')
    localStorage.getItem('borderColor')
    localStorage.getItem('bgColor')
  }, [updatedInfo])

  const handleUpdate = (info) => {
    setUpdatedInfo(info);
    localStorage.setItem('title', updatedInfo.title)
    localStorage.setItem('titleColor', updatedInfo.titleColor)
    localStorage.setItem('lists', updatedInfo.lists)
    localStorage.setItem('color', updatedInfo.color)
    localStorage.setItem('borderColor', updatedInfo.borderColor)
    localStorage.setItem('bgColor', updatedInfo.bgColor)
  }

  const [clickMe, setClickMe] = useState(false)

  const leftSidebarMenus = [
    {
      text: 'Title',
      icon: faHeading,
      onClick: () => handleChangeMenu('Title')
    },
    {
      text: 'Button',
      icon: faCircleDot,
      onClick: () => handleChangeMenu('Button')
    },
    {
      text: 'List',
      icon: faList,
      onClick: () => handleChangeMenu('List')
    }
  ]

  const colorStyle = {
    color:updatedInfo.color, 
    border:`2px solid ${updatedInfo.borderColor}`, 
    backgroundColor:updatedInfo.bgColor
  }

  const handleChangeList = (index, value) => {
    const updatedLists = [...lists];
    updatedLists[index] = value;
    setLists(updatedLists);
  };

  const removeList = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
  };

  const swapLists = (index1, index2) => {
    const updatedLists = [...lists];
    [updatedLists[index1], updatedLists[index2]] = [updatedLists[index2], updatedLists[index1]];
    setLists(updatedLists);
  };

  return (
    <main className={`main-page ${openSidebar ? 'active' : ''}`}>
      <h1 className="head-title" style={{color:updatedInfo.titleColor}}>{updatedInfo.title || 'Your title'}</h1>
      {updatedInfo.lists.length > 0 ? (
        <div className="btns">
          {updatedInfo.lists?.map((list, index) => (
            <button style={colorStyle} class={`list-btn ${enabledList !== index ? 'inactive' : ''}`} key={index} onClick={() => setEnabledList(index)}>
              <span className="list-btn-text">{list}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="btns">
          <button style={colorStyle} class={`list-btn`}>
            <span className="list-btn-text">Try to click the button below.</span>
          </button>
          <button style={colorStyle} class={`list-btn ${clickMe ? '' : 'inactive'}`} onClick={() => setClickMe(true)}>
            <span className="list-btn-text">I will be shown when I am clicked.</span>
          </button>
        </div>
      )}

      <LeftSidebar open={openSidebar}>
        <SidebarButton isActive={openSidebar} onClick={() => setOpenSidebar(!openSidebar)} text='Settings' icon={faGear}/>
        <div className={`sidebar-menus ${openSidebar ? '' : 'inactive'}`}>
          {leftSidebarMenus.map(list => (
            <SidebarButton isActive={list.text === menu} onClick={list.onClick} text={list.text} icon={list.icon}/>
          ))}
        </div>
      </LeftSidebar>

      <RightSidebar>
        <SidebarButton text='Reset' icon={faArrowRotateLeft} onClick={() => setEnabledList()}/>
        <SidebarButton text='Shuffle' icon={faShuffle} onClick={() => shuffleArray(updatedInfo.lists)}/>
      </RightSidebar>

      <SidebarSettings open={openSidebar} animate={settingsAnim}>
        {menu === 'Button' && (
          <>
            <h1 className="settings-title">Button settings</h1>
            <p>These are the colour settings of each button. You can change them below.</p>

            <div className="settings-inputs">
              <div className='group-input'>
                <h3 class='text-in-settings'>Text colour</h3>
                <ColorPicker forLabel='color' value={updatedInfo.color} onChange={e => setColor(e.target.value)} defaultValue={updatedInfo.color ? updatedInfo.color : initialValue.color}/>
              </div>

              <div className='group-input'>
                <h3 class='text-in-settings'>Border colour</h3>
                <ColorPicker forLabel='border-color' value={updatedInfo.borderColor} onChange={e => setBorderColor(e.target.value)} defaultValue={updatedInfo.borderColor ? updatedInfo.borderColor : initialValue.borderColor}/>
              </div>

              <div className='group-input'>
                <h3 class='text-in-settings'>Background colour</h3>
                <ColorPicker forLabel='bg-color' value={updatedInfo.bgColor} onChange={e => setBgColor(e.target.value)} defaultValue={updatedInfo.bgColor ? updatedInfo.bgColor : initialValue.bgColor}/>
              </div>
            </div>
          </>
        )}

        {menu === 'Title' && (
          <>
            <h1 className="settings-title">Title settings</h1>
            <p>The title is displayed on the top of the screen. You can customise the colour or the font size of the title as you prefer.</p>

            <div className="settings-inputs">
              <div className='group-input'>
                <h2 className="text-in-settings">Title</h2>
                <input type="text" class='text-input' placeholder='Your title' value={title} defaultValue={updatedInfo.title} onChange={e => setTitle(e.target.value)}/>
              </div>
              <div className='group-input'>
                <h3 class='text-in-settings'>Title colour</h3>
                <ColorPicker forLabel='title-color' value={updatedInfo.titleColor} onChange={e => setTitleColor(e.target.value)} defaultValue={updatedInfo.titleColor ? updatedInfo.titleColor : initialValue.titleColor}/>
              </div>
            </div>
          </>
        )}

        {menu === 'List' && (
          <>
            <h1 className="settings-title">List</h1>
            <p>This is the list of buttons that you can add, edit, or delete them based on your preference. You can click on any buttons to expand the text.</p>

            <div className="settings-inputs">
              {lists.map((list, index)=> 
              <div className="list-inputs">
                <input key={index} type="text" class='text-input' value={list} onChange={e => handleChangeList(index, e.target.value)}/>
                {lists.length > 0 ? (
                  <span className="manage-btns">
                    {index > 0 && (
                      <span onClick={() => swapLists(index, index - 1)}>
                        <FontAwesomeIcon icon={faChevronUp}/>
                      </span>
                    )}
                    {index < lists.length - 1 && (
                      <span onClick={() => swapLists(index, index + 1)}>
                      <FontAwesomeIcon icon={faChevronDown}/>
                    </span>
                    )}
                    <span onClick={() => removeList(index)}>
                      <FontAwesomeIcon icon={faTrashCan}/>
                    </span>
                  </span>
                ): null}
              </div>
              )}
              <button className="add-btn" onClick={() => setLists([...lists, ''])}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </>
        )}
          <button className='main-btn' onClick={() => handleUpdate({
            title: title,
            titleColor: titleColor,
            lists: lists,
            color: color,
            borderColor: borderColor,
            bgColor: bgColor
          })}>Save</button>
      </SidebarSettings>
    </main>
  )
}