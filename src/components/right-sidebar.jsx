export default function RightSidebar({children, open}){
  return (
    <div className={`right-sidebar ${open ? '' : 'inactive'}`}>
      {children}
    </div>
  )
}