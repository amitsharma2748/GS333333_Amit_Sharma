import  { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store"; 
import { nanoid } from "nanoid";
import { IconButton,  Typography } from "@mui/material";
import SideDrawerModal from "../../../components/common/SideDrawerModal";
import { MdDelete } from "react-icons/md";
import EditStoresForm from "./EditStoresForm";
import { deleteSkuByKey, SKuStateType } from "../../../redux/stores/getSkuSlice";

const StoresTableComponent = () => {
  const dispatch=useAppDispatch()
  const skuArr = useSelector(
    (state: RootState) => state.getSkuSlice.skuArr
  );

  // Track menu state
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // const handleEditOpen = (payload:SKuStateType,index: number) => {
  //   const updateObj={
  //     editKey:index,
  //     payload
  //   }
  //   dispatch(storeEditObj(updateObj))
  //   setIsEditModalOpen(true)
  // };

  const handleDelete = (index: number) => {
     dispatch(deleteSkuByKey(index))
  };

  const handleCloseEditModal=()=>{
    setIsEditModalOpen(false)
  }

  if (skuArr.length === 0) {
    return (
      <div>
        <Typography variant="h6">No Data Present</Typography>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {/* <th></th> */}
            <th style={{width:"5%"}}></th>
            <th style={{width:"10%"}}>S.No</th>
            <th style={{width:"50%"}}>SKU</th>
            <th style={{width:"10%"}}>Price</th>
            <th style={{width:"10%"}}>Cost</th>
           
          </tr>
        </thead>
        <tbody>
          {skuArr.map((store: SKuStateType, index: number) => {
            const {  skuName, skuCost,skuPrice } = store;
            return (
              <tr key={nanoid()}>
                {/* <td>
                  <i className="fas fa-trash-alt delete-icon"></i>
                </td> */}
                <td style={{ width: "100px" }}>
                  {/* <IconButton onClick={()=>handleEditOpen(store,index)} >
                    <MdEdit />
                  </IconButton> */}
                  <IconButton onClick={()=>handleDelete(index)} >
                  <MdDelete />
                  </IconButton>
                </td>
                <td>{index + 1}</td>
                <td>{skuName}</td>
                <td>${skuPrice}</td>
                <td>${skuCost}</td>
              
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Context Menu (Global for all rows, opens where clicked) */}
      <SideDrawerModal isOpen={isEditModalOpen} onClose={handleCloseEditModal} title="Edit Stores">
         <EditStoresForm onClose={handleCloseEditModal}/>
      </SideDrawerModal>
      
    </div>
  );
};

export default StoresTableComponent;
