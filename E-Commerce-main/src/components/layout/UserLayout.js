
import {  AutoComplete, Avatar, Badge, ConfigProvider,Drawer,Dropdown,Image, Input, Layout, Space } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../image/sa.png'
import { LoginOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useAppContext } from '../ContextApi';
import Order from '../user/Order';
import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/Loginslices';
import { fetchSearchProduct } from '../../services/AllProduct';
const { Header, Content, Footer } = Layout;
const UserLayout = () => {
  const{appState}=useAppContext()
  const dispatch=useDispatch();
  const carddata=useSelector((state)=>state)
  console.log("carddata",carddata)
  const navigate=useNavigate(); const items = [
    {
      key: "1",
      label: <div onClick={()=>handleClick('/profile')}> Profile</div>,
      icon: <UserOutlined/>,
    },
    {
      key: "2",
      label: <div onClick={()=>handleClick('/settings')}> Setting</div>,
      icon: <SettingOutlined/>,
    },
    {
      key: "3",
      label:<div onClick={()=>handleClick(3)}> Logout</div>,
      icon: <LoginOutlined/>,
    },
  ]
  const handleClick = (e) => {
    if(e===3){
      dispatch(logout());
    }
    else{
      navigate(`${e}`)
    }
  }
  const iteminfo=[
    {
      name:'About Us',
      link:'/aboutus'
    },
    {
      name:'Contact Us',
      link:'/contactus'
    },
    {
      name:'Blog',
      link:'/blog'
    },
  ]
  const authinfo=[
    {
      name:'Login',
      link:'auth/login'
    },
    {
      name:'Sign up',
      link:'auth/signup'
    },
  ]
  const handleitem=(item)=>{
    navigate(item.link)
  }
  console.log("sd",appState)
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    if(carddata?.addToCart?.data.length>=0)
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSearch = (value) => {
    console.log("values1",value);
    dispatch(fetchSearchProduct(value?.target?.value));
  };
  const { data:searchdata, loading:searchloading } = useSelector((state) => state.searchproduct);
// console.group("sdadapter",searchdata?.data)
const onSelect = (e,option) => {
  navigate(`/searchproduct/${option.id}`)
  console.log('onSelect', option);
};
  return (
    <ConfigProvider
  theme={{
    components: {
      Layout: {
      headerBg:'#5C35F9',
      headerHeight: 40,
      fontSize: 16,
      footerBg: '#5C35F9'
      },
    },
  }}
>
    <Layout >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='header'>
          <div className="w-10 h-10">
      <Image src={logo} alt="prayush"/>
          </div>
          <div>
            <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300 }}
       options={searchdata?.data?.map((item)=>{
        return{
          ...item,
          value:item?.title,
          label:item?.category
        }
       })}
      onSelect={onSelect}
      size="large"
    >
      <Input.Search size="large" placeholder="input here" onPressEnter={handleSearch} />
    </AutoComplete>
            </div>
          <div className='iteminfo'>
            {
              iteminfo?.map((item)=>(
                <div key={item.link} onClick={()=>handleitem(item)}>
                  <div>
                    {item.name}
                    </div>
                  </div>
              ))
            }
          </div>
          <div className='iteminfo'>
          <div>
                {
                  carddata?.authinfo?.userInfo?.token && (
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={['click']}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <UserOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  )
                }
              </div>
          <div>
            <Badge count={carddata?.addToCart?.data.length}size='small' onClick={showDrawer}>
              <Avatar icon={<ShoppingCartOutlined />} size='small'/>
            </Badge>
          </div>
            <div className="iteminfo">
            {
              authinfo?.map((item)=>(
                <div key={item.link} onClick={()=>handleitem(item)}>
                  <div>
                    {item.name}
                    </div>
                  </div>
              ))
            }
            </div>
          </div>
        </div>
      </Header>
      <Content 
        className="p-10 min-h-[32.2rem]"
      >
        <div>
          <Outlet/>
        </div>
      </Content>
      <Footer
        className="text-center ring-offset-8">
        Ant Design ©{new Date().getFullYear()} Created By prayush khatri
      </Footer>
      {
        (open) &&(
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <Order/>
        </Drawer>
        )
      }
    </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;