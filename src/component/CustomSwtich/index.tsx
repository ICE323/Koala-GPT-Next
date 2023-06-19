import React from "react";
import {
    CustomSwitchContainer,
} from "./styles";
import { Switch } from "antd"

type SetRealTime = React.Dispatch<React.SetStateAction<boolean>>;

interface iCustomSwitch {
    title: string,
    text: string,
    value?: boolean,
    event?: SetRealTime | undefined
}

const CustomSwitch = ({title, text, value, event} : iCustomSwitch) => {

  return (
    <CustomSwitchContainer>
       <Switch checked={value} onChange={(checked: boolean) => event?.(checked)}/>
       <p>
            {title}
            <span>{text}</span>
       </p>
    </CustomSwitchContainer>
  );
};

export default CustomSwitch