import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =[
    {
        title:'Company Master',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Leave Master',
        path:'/reports',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Employee Master', 
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title:'Leave Application Module',
        path:'/team',
        icon:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title:'Utilities',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title:'Change Passowrd',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title:'Admin',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title:'View Reports',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title:'LogOut',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    }
]

