import React from "react";
import ReactDOM from "react-dom/client";
import './SidebarStyle.css';
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FilePresentIcon from '@mui/icons-material/FilePresent';


const SidebarComp = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    return (
        <div className="SidebarRoot">
            <Sidebar width={"fit-content"} defaultCollapsed={ true }>
                    <Menu>
                        <MenuItem icon={<MenuRoundedIcon onClick={() => {
                            collapseSidebar();
                        }} />}>
                            <h2> Evalynn Luna</h2>
                    </MenuItem>
                    <MenuItem icon={<FilePresentIcon/>}> Projects </MenuItem>
                    <MenuItem icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
                        {/*<SubMenu label="Charts" icon={<BarChartRoundedIcon />}>*/}
                        {/*    <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>*/}
                        {/*    <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>*/}
                        {/*</SubMenu>*/}
                    </Menu>
                </Sidebar>
            </div>
    );
};
export default SidebarComp;