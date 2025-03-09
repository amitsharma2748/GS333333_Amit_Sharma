import  {  useState } from "react";
import AutoSuggestDropdown from "../../../components/common/AutoSuggestDropdown";
import CustomTextField from "../../../components/common/CustomTextField";
import { STORES_CITIES, STORES_STATES } from "../../../utils/globalContants";
import { Button, Typography } from "@mui/material";
import {  useSelector } from "react-redux";
import { addStores } from "../../../redux/stores/getStoresSlice";
import { RootState, useAppDispatch } from "../../../redux/store";

const AddStoresForm = ({onClose}:any) => {
    const dispatch=useAppDispatch()
    const tableData=useSelector((state:RootState)=>(state.getStoresSlice.storeArr))
  // State for form fields
  const [formData, setFormData] = useState({
    storeName: "",
    storeState: "",
    storeCity: "",
  });

  // State for error messages
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handler for text input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Remove error message when user types
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // Save button handler with validation
  const handleSave = () => {
    let newErrors: Record<string, string> = {};

    // Validate each field dynamically
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    // If there are errors, update the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    // Proceed with saving (e.g., API call)
    dispatch(addStores([...tableData,formData]))
    onClose()
  };

  

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        {/* Store Name */}
        <div className="mt-1">
          <label>Store Name</label>
          <CustomTextField
            name="storeName"
            onChange={(value) => handleInputChange("storeName", value)}
            placeholder="Enter store name"
            isInputError={errors.storeName?true:false}
          />
          {errors.storeName && (
            <Typography color="error" variant="subtitle1">
              {errors.storeName}
            </Typography>
          )}
        </div>

        {/* Store State */}
        <div className="mt-3">
          <label>Store State</label>
          <AutoSuggestDropdown
            menuList={STORES_STATES}
            onChange={(value) => handleInputChange("storeState", value)}
            isDropdownError={errors.storeCity?true:false}
            placeholder="Select state..."
          />
          {errors.storeState && (
            <Typography color="error" variant="subtitle1">
              {errors.storeState}
            </Typography>
          )}
        </div>

        {/* Store City */}
        <div className="mt-3">
          <label>Store City</label>
          <AutoSuggestDropdown
            menuList={STORES_CITIES }
            onChange={(value) => handleInputChange("storeCity", value)}
            placeholder="Select city..."
            isDropdownError={errors.storeCity?true:false}
          />
          {errors.storeCity && (
            <Typography color="error" variant="subtitle1">
              {errors.storeCity}
            </Typography>
          )}
        </div>
      </div>
        
      {/* Save Button */}
      <div className="d-flex justify-content-end gap-3">
        <Button onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddStoresForm;
