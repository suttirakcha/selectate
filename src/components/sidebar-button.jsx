import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SidebarButton({onClick, icon, text, isActive}){
  return (
    <button onClick={onClick} className={`sidebar-btn ${isActive ? 'active' : ''}`}>
      <FontAwesomeIcon icon={icon} className='icons' width='20' height='20'/>
      <p>{text}</p>
    </button>
  )
}