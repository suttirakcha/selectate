import { ChangeEvent, ReactNode } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface SidebarProps {
    children: ReactNode
    open?: boolean
}

export interface SidebarButtonProps {
    onClick: () => void
    icon: IconProp
    text: string
    isActive?: boolean
}

export interface SidebarSettingsProps {
    children: ReactNode
    open: boolean
    animate: boolean
}

export interface ColorPickerProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    defaultValue: string
    forLabel: string
}

export interface Value {
    title: string
    titleColor: string
    lists: string[]
    color: string
    borderColor: string
    bgColor: string
}