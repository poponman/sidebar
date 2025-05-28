import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/home" ,
    },
    {
        title: "メール",
        icon: <MailIcon />,
        link: "/home" ,
    },
    {
        title: "アナリティクス",
        icon: <InsertChartIcon />,
        link: "/home" ,
    },
    {
        title: "友だち追加",
        icon: <PersonAddIcon />,
        link: "/home" ,
    },
    {
        title: "お支払い設定",
        icon: <AddCardIcon />,
        link: "/home" ,
    },
    {
        title: "アップロード",
        icon: <CloudUpload />,
        link: "/home" ,
    },
    {
        title: "詳細設定",
        icon: <Settings />,
        link: "/home" ,
    },
]

