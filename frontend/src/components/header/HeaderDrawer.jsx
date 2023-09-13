import React, {useState} from "react";

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

function HeaderDrawer(props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={toggleDrawer}>category</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        size={500}
      >
        <h2>상의</h2>
        <h2>하의</h2>
        <h2>신발</h2>
        <h2>악세서리</h2>
      </Drawer>
    </>
  )
}

export default HeaderDrawer;
