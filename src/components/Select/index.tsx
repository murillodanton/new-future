import { useState } from 'react';
import * as S from './styles';

type SelectProps = {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Select = ({ label, onChange, options, value, placeholder }: SelectProps) => {

    const [isOpen, setIsOpen] = useState(false);


    const handleChange = (option: string) => {
        onChange(option);
        setIsOpen(false);
    }

    const handleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <S.Container>
            <label>{label}</label>
            <div onClick={handleOpen}>
                {placeholder && !value ? <p>{placeholder}</p> : <p>{value}</p>}
                {isOpen && (
                    <S.Options>
                        {options.map((option) => (
                            <li key={option}>
                                <button onClick={() => handleChange(option)}>
                                    {option}
                                </button>
                            </li>
                        ))}
                    </S.Options>
                )}
            </div>

        </S.Container>

    )
}