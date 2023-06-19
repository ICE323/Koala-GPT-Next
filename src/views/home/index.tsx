import React from "react";
import {
  HomeContainer,
  HomeWrapper
} from "./styles";

// components
import HomeHeader from "./home-header";
import GPTSetting from "./gpt-container";

const ContactView: React.FC = () => {
  return (
      <HomeContainer>
        <HomeWrapper>
            <HomeHeader />
            <GPTSetting />
        </HomeWrapper>
      </HomeContainer>
  );
};

export default ContactView