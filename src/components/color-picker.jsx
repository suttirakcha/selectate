import { useState } from "react"

export default function ColorPicker({value, onChange, defaultValue, forLabel}){
  const [color, setColor] = useState(defaultValue)
  return (
    <label htmlFor={forLabel} style={{backgroundColor:color}} class='color-picker-input'>
      <input id={forLabel} className='color-picker' defaultValue={color} type='color' value={value} onChange={onChange} onInput={e => setColor(e.target.value)}/>
    </label>
  )
}