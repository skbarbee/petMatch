import React from "react";


const PetCheckBox = ({label, value, onChange}) => {
   
    return (
        <label>
                <div>
                    <input
                        type="checkbox"
                        checked={value}
                        label="Are You Able to Meet-up?"
                        name="available"
                        onChange={onChange}

                    />
                </div>
            {label}
        </label>
    )
}


export default PetCheckBox

