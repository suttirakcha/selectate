export default function LeftSidebar({children, open}){
  return (
    <div className={`left-sidebar ${open ? '' : 'inactive'}`}>
      {children}
    </div>
  )
}