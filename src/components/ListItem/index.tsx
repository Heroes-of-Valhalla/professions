import React from "react"

export const ListItem = ({ children }: React.PropsWithChildren) => {
    return <li className="text-xl p-3 bg-indigo-500 text-white rounded-lg my-2">{children}</li>
}