import { ChangeEvent, useState } from "react"

interface ColorPickerProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  defaultValue: string
  forLabel: string
}

export default function ColorPicker({value, onChange, defaultValue, forLabel} : ColorPickerProps){

  const [color, setColor] = useState(defaultValue)

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  return (
    <label htmlFor={forLabel} style={{backgroundColor: color}} className='color-picker-input'>
      <input id={forLabel} className='color-picker' defaultValue={color} type='color' value={value} onChange={onChange} onInput={handleValue}/>
    </label>
  )
}