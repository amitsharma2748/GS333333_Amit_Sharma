import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SideDrawerModal from "../../components/common/SideDrawerModal";
import StoresTableCommponent from "./components/StoresTableCommponent";
import AddStoresForm from "./components/AddStoresForm";

const IndexStore = () => {
  const storesList = useSelector((state: RootState) => state.getStoresSlice);
  const [isModalOpen,setIsModalOpen]=useState(false)

  const handleCloseModal=()=>{
    setIsModalOpen(false)
  }

  const handleOpenModal=()=>{
    setIsModalOpen(true)
  }


  useEffect(() => {
    console.log(storesList,storesList.storeArr.length);
  }, [storesList]);
  return (
    <div>
      <div className="content">
        <StoresTableCommponent />
        <button className="new-store-btn" onClick={handleOpenModal}>NEW STORE</button>
      </div>
      <SideDrawerModal isOpen={isModalOpen} onClose={handleCloseModal} title="Add Stores">
        <AddStoresForm onClose={handleCloseModal}/>
      </SideDrawerModal>
    </div>
  );
};

export default IndexStore;
