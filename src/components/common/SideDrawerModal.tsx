import { Drawer } from '@mui/material'
import  { ForwardedRef, ReactNode, forwardRef } from 'react'

type SideModalPropsType = {
  isOpen: boolean
  title:string
  onClose: () => void
  children: ReactNode
}

// Define styles in a separate object
const getDrawerStyles ={
  "& .MuiDrawer-paper": {
    width: "400px", // Dynamic width 
    padding: "16px",
    transition: "0.3s ease-in-out",
  },
}

// Forward ref to the Drawer component
const SideModal = forwardRef(
  ({ isOpen, onClose,title, children }: SideModalPropsType, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        ref={ref} // Pass the forwarded ref to the Drawer
        sx={getDrawerStyles}
        // sx={{ width: 300, "& .MuiDrawer-paper": { width: 300 } }}
      >
        <h3>{title}</h3>
        {children}
      </Drawer>
    )
  }
)


export default SideModal
