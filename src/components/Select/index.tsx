import React, { SelectHTMLAttributes } from "react"

export const Select = ({ children, ...props }: React.PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>) => {
    return <select {...props} className="border p-3 rounded-lg w-full text-xl">{children}</select>
}