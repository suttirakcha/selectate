export default function SidebarSettings({children, open, animate}){
  return (
    <section className={`sidebar ${open ? 'active' : ''}`}>
      <div className={`inner-sidebar ${animate ? 'active' : ''}`}>
        {children}
      </div>
    </section>
  )
}