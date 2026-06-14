import { AppstoreOutlined, ContainerOutlined, DesktopOutlined,  PieChartOutlined } from "@ant-design/icons"

export const paymentMethd=[
    {
        name:"Esewa",
        image:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp",
        id:1
    },
    {
        name:"Khalti",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Khalti_Digital_Wallet_Logo.png.jpg/640px-Khalti_Digital_Wallet_Logo.png.jpg",
        id:2
    },
    {
        name:"COD",
        image:"https://c8.alamy.com/comp/M0FJ47/cod-cash-on-delivery-rubber-stamp-M0FJ47.jpg",
        id:3
    },
]
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  export const items = [
    getItem('Dashboard', '/admin/dashboard', <PieChartOutlined />),
    getItem('User List', '/admin/userlist', <DesktopOutlined />),
    getItem('Profile', '/admin/profile', <ContainerOutlined />),
    getItem('Hot Products', '/admin/hotproduct'),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined/>),
  ];