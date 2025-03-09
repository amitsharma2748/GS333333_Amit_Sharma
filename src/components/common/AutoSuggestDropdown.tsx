import React, { useEffect, useRef, useState } from "react";
import { STORES_STATES } from "../../utils/globalContants";
import "../../styles/autosuggestDropdown.css";
import { MenuItem } from "../../utils/globalTypes";

interface AutoSuggestPropsType{
    menuList:MenuItem[];
    placeholder?:string
    onChange:(value:string)=>void
    isDropdownError?:boolean
    defaultValue?:string
}

const AutoSuggestDropdown = (autoSuggestProps:AutoSuggestPropsType) => {
    const {menuList,placeholder="Search...",onChange,isDropdownError=false,defaultValue}=autoSuggestProps
  const autoSuggestListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const filteredMenuItem = menuList&&menuList.filter((item) =>
    item.menuValue.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(false);
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (menuName: string) => {
    setIsSelected(true);
    setInputValue(menuName);
    onChange(menuName)
    setShowDropdown(false);
  };

  useEffect(()=>{
    if(defaultValue){
      const selectedMenuItem=menuList.find((item)=>(item.menuValue===defaultValue))?.menuName||""
      setInputValue(selectedMenuItem)
    }
  },[defaultValue])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autoSuggestListRef.current &&
        !autoSuggestListRef.current.contains(event.target as Node) &&
        inputRef.current !== event.target
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="autosuggest-dropdown">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        value={inputValue} 
        className={`autosuggest-input ${isDropdownError?"error-dropdown":""}`}
        placeholder={placeholder}
        onFocus={() => setShowDropdown(true)}
      />

      {showDropdown && !isSelected && (
        <div className="list" ref={autoSuggestListRef}>
          {filteredMenuItem.length > 0 ? (
            filteredMenuItem.map((item, index) => (
              <div key={index} onClick={() => handleOptionClick(item.menuName)}>
                {item.menuName}
              </div>
            ))
          ) : (
            <div className="no-options">No Options</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoSuggestDropdown;
