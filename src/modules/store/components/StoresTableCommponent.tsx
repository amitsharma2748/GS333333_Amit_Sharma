import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { deleteStoreByKey, storeEditObj, StoreStateType } from "../../../redux/stores/getStoresSlice";
import { nanoid } from "nanoid";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import SideDrawerModal from "../../../components/common/SideDrawerModal";
import { MdDelete, MdEdit } from "react-icons/md";
import EditStoresForm from "./EditStoresForm";

const StoresTableComponent = () => {
  const dispatch=useAppDispatch()
  const storesArr = useSelector(
    (state: RootState) => state.getStoresSlice.storeArr
  );

  // Track menu state
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const handleEditOpen = (payload:StoreStateType,index: number) => {
    const updateObj={
      editKey:index,
      payload
    }
    dispatch(storeEditObj(updateObj))
    setIsEditModalOpen(true)
  };

  const handleDelete = (index: number) => {
     dispatch(deleteStoreByKey(index))
  };

  const handleCloseEditModal=()=>{
    setIsEditModalOpen(false)
  }

  if (storesArr.length === 0) {
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
            <th></th>
            <th>S.No</th>
            <th>Store</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {storesArr.map((store: StoreStateType, index: number) => {
            const { storeCity, storeName, storeState } = store;
            return (
              <tr key={nanoid()}>
                <td>
                  <i className="fas fa-trash-alt delete-icon"></i>
                </td>
                <td>{index + 1}</td>
                <td>{storeName}</td>
                <td>{storeCity}</td>
                <td>{storeState}</td>
                <td style={{ width: "100px" }}>
                  <IconButton onClick={()=>handleEditOpen(store,index)} >
                    <MdEdit />
                  </IconButton>
                  <IconButton onClick={()=>handleDelete(index)} >
                  <MdDelete />
                  </IconButton>
                </td>
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
