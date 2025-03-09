import React, { useEffect, useState } from "react";
import AutoSuggestDropdown from "../../../components/common/AutoSuggestDropdown";
import CustomTextField from "../../../components/common/CustomTextField";
import { STORES_CITIES, STORES_STATES } from "../../../utils/globalContants";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStores } from "../../../redux/stores/getStoresSlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { addSku, SKuStateType } from "../../../redux/stores/getSkuSlice";
import CustomNumberField from "../../../components/common/CustomNumberField";

const AddSkuForm = ({onClose}:any) => {
    const dispatch=useAppDispatch()
    const tableData=useSelector((state:RootState)=>(state.getSkuSlice.skuArr))
  // State for form fields
  const [formData, setFormData] = useState<SKuStateType>({
    skuName: "",
    skuCost: "",
    skuPrice: "",
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
    dispatch(addSku([...tableData,formData]))
    onClose()
  };

  

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        {/* Store Name */}
        <div className="mt-1">
          <label>SKu Name</label>
          <CustomTextField
            name="skuName"
            onChange={(value) => handleInputChange("skuName", value)}
            placeholder="Enter Sku name"
            isInputError={errors.skuName?true:false}
          />
          {errors.skuName && (
            <Typography color="error" variant="subtitle1">
              {errors.skuName}
            </Typography>
          )}
        </div>

        {/* Store State */}
        <div className="mt-3">
          <label>Sku Price</label>
          <CustomNumberField
            name="skuPrice"
            onChange={(value) => handleInputChange("skuPrice", value)}
            placeholder="Enter sku price"
            isInputError={errors.skuPrice?true:false}
          />
          {errors.skuPrice && (
            <Typography color="error" variant="subtitle1">
              {errors.skuPrice}
            </Typography>
          )}
        </div>

        {/* Store City */}
        <div className="mt-3">
          <label>Sku Cost</label>
          <CustomNumberField
            name="skuCost"
            onChange={(value) => handleInputChange("skuCost", value)}
            placeholder="Enter sku cost"
            isInputError={errors.skuCost?true:false}
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

export default AddSkuForm;
