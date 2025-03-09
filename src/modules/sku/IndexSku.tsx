import  {  useState } from "react"; 
import SideDrawerModal from "../../components/common/SideDrawerModal";
import StoresTableCommponent from "./components/StoresTableCommponent";
import AddStoresForm from "./components/AddSkuForm";

const IndexSku = () => { 
  const [isModalOpen,setIsModalOpen]=useState(false)

  const handleCloseModal=()=>{
    setIsModalOpen(false)
  }

  const handleOpenModal=()=>{
    setIsModalOpen(true)
  }


 
  return (
    <div>
      <div className="content">
        <StoresTableCommponent />
        <button className="new-store-btn" onClick={handleOpenModal}>NEW SKU</button>
      </div>
      <SideDrawerModal isOpen={isModalOpen} onClose={handleCloseModal} title="Add Stores">
        <AddStoresForm onClose={handleCloseModal}/>
      </SideDrawerModal>
    </div>
  );
};

export default IndexSku;
