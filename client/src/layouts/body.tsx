import React from "react"
interface Props {
    children?: React.ReactNode;
}
export default function Body({ children }: Props) {
    return (
        <div className="min-h-screen max-w-full pt-10 dark:bg-zinc-900 text-white">
            {children}
        </div>
    )
}
