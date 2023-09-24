import React, { useState } from "react"
import { Link } from "@inertiajs/inertia-react"
import { Sidebar as Side, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar"
import { FiFileText, FiBriefcase, FiUser, FiLogOut, FiMenu, FiX, FiHome } from "react-icons/fi"
import route from "ziggy-js"

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { collapseSidebar } = useProSidebar()

    return (
        <>

        <Side>
            <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>
                <Link href={route("admin.dashboard")}>
                    <MenuItem icon={<FiFileText />}>Dashboard</MenuItem>
                </Link>
                <Link href={route("admin.home")}>
                    <MenuItem icon={<FiHome />}>Home</MenuItem>
                </Link>
                <SubMenu label="Master" icon={<FiBriefcase />}>
                    <MenuItem> Pie charts</MenuItem>
                    <MenuItem> Line charts</MenuItem>
                    <MenuItem> Bar charts</MenuItem>
                </SubMenu>
                <MenuItem icon={<FiUser />}> Profile</MenuItem>
                {/* <Link href={route("logout")} method="post" as="button" type="button">
                    <MenuItem icon={<FiLogOut />}> Logout</MenuItem>
                </Link> */}
            </Menu>
        </Side>

        <main className="my-4">
            <button onClick={() => {
                collapseSidebar()
                setCollapsed(!false)
            }}>{ collapsed ? <FiMenu /> : <FiX /> }</button>
        </main>

        </>
    )
}

export default Sidebar