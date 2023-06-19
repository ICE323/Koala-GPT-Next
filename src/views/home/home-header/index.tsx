import React from "react";
import {
  HomeHeader,

} from "./styles";

import Logo from "@/assets/image/koala.svg";
import Image from "next/image";

const HeaderView: React.FC = () => {
  return (
    <HomeHeader>
        <h1>
            <Image src={Logo} alt="logo" draggable={false} width={42.59} height={64} />
            KoalaWriter
        </h1>
        <p>
            Welcome! Our goal is to offer the best possible AI writer.
        </p>
        <p>
            Join our community now to help shape the development: <span>Discord Invite</span>
        </p>
        <p>
            Get started by typing in your article's topic below and clicking Write Article. You can also <span>view sample output</span>.
        </p>
    </HomeHeader>
  );
};

export default HeaderView
