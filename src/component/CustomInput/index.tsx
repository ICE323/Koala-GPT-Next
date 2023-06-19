import React from "react";
import { Select, Input  } from 'antd';
import {
    FormContainer,
    SubText
} from "./styles";

type SetTargetKeyword = React.Dispatch<React.SetStateAction<string>>;

interface iCustomForm {
    label?: string,
    options?: {label: string, value: string}[],
    isInput?: boolean,
    value?: string,
    subText?: string,
    event?: SetTargetKeyword
}

const CustomForm = ({label, options, isInput, value, subText, event}: iCustomForm) => {
  return (
    <FormContainer>
        <p>{label}</p>
        {
            !isInput && 
            <Select
                onChange={(e: string) => event?.(e)}
                showSearch
                value={value}
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input)}
                options={options}
            />
        }
        {
            isInput && <Input placeholder="" value={value} className="custom-input" onChange={(e) => event?.(e.target.value)}/>
        }
        <SubText>{subText}</SubText>
    </FormContainer>
  );
};

export default CustomForm
