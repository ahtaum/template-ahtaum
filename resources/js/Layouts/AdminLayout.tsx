import { Head } from "@inertiajs/inertia-react"
import React, { PropsWithChildren } from "react"
import Sidebar from "@/Components/admin/Sidebar"
import { NavbarMenu } from "@/Components/admin/NavbarMenu"

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AdminLayout({ title, children, }: PropsWithChildren<Props>) {
    return (
        <div>
            <Head title={title} />
            
            <NavbarMenu />

            <main className="flex gap-4 h-screen w-screen bg-base-100">
                <Sidebar />

                <div className="overflow-y-scroll w-full my-4 p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
