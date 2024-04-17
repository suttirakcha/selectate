import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SidebarButtonProps, SidebarProps, SidebarSettingsProps } from "../types"

export function LeftSidebar({ children, open } : SidebarProps){
  return (
    <div className={`left-sidebar ${open ? '' : 'inactive'}`}>
      {children}
    </div>
  )
}

export function RightSidebar({ children, open } : SidebarProps){
  return (
    <div className={`right-sidebar ${open ? '' : 'inactive'}`}>
      {children}
    </div>
  )
}

export function SidebarButton({ onClick, icon, text, isActive } : SidebarButtonProps){
  return (
    <button onClick={onClick} className={`sidebar-btn ${isActive ? 'active' : ''}`}>
      <FontAwesomeIcon icon={icon} className='icons' width='20' height='20'/>
      <p>{text}</p>
    </button>
  )
}

export function SidebarSettings({ children, open, animate } : SidebarSettingsProps){
  return (
    <section className={`sidebar ${open ? 'active' : ''}`}>
      <div className={`inner-sidebar ${animate ? 'active' : ''}`}>
        {children}
      </div>
    </section>
  )
}