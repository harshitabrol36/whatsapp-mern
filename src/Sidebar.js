import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import{SearchOutlined} from "@material-ui/icons"
import SidebarChat from "./SidebarChat"


function sidebar() {
    return (
        <div className="sidebar">
            <div className = "sidebar__header">
                <Avatar src ="https://avatars3.githubusercontent.com/u/53008458?s=400&u=92a01554406d569bd90b6fc8d899ac378bb326a5&v=4 "/>
                <div className="sidebar__headerRight">
                    <IconButton>
                       <DonutLargeIcon />   
                    </IconButton>
                    <IconButton>
                       <ChatIcon />   
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon />   
                    </IconButton>
                     
                </div>
            </div>
            <div className = "sidebar__search">
                <div className = "sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder = "Search or start a new chat" type = "text"/>
                </div>
            </div>
           <div className = "sidebar__chats">
              <SidebarChat />
               <SidebarChat />
               <SidebarChat />
           </div>
        </div>
    )
}

export default sidebar
