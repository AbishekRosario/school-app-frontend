import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../custom-css/StudentRegister.css';
import '../custom-css/custom-arrowdropdown.css';

const CustomSelect = ({ label, name, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="position-relative mb-3">
            <select
                name={name}
                className="form-select"
                value={value}
                onChange={(e) => {
                    onChange(e);
                    setIsOpen(false); // Close after selection
                }}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                required
            >
                <option value="">{label}</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <div className="dropdown-icon">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
        </div>
    );
};

export default CustomSelect;
