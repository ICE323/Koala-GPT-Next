import React, { useState } from "react";
import { BsDiscord } from "react-icons/bs";
import {
    Sidebar,
    MenuItem,
} from "./styles";
import { useRouter } from "next/router";

import HomeIMG from "@/assets/image/home.svg";
import ChatIMG from "@/assets/image/chat.svg";
import PricingIMG from "@/assets/image/pricing.svg";
import DiscordIMG from "@/assets/image/discord.svg";
import LoginIMG from "@/assets/image/login.svg";
import RegisterIMG from "@/assets/image/register.svg";
import WriterIMG from "@/assets/image/writer.svg";
import Image from "next/image";

const menuData = [
  { img: HomeIMG, label: 'Home', path: '/#'},
  { img: ChatIMG, label: 'KoalaChat', path: '/#'},
  { img: WriterIMG, label: 'KoalaWriter', path: '/'},
  { img: PricingIMG, label: 'Pricing', path: '/#'},
  { img: LoginIMG, label: 'Login', path: '/#'},
  { img: RegisterIMG, label: 'Register', path: '/#'},
]

const SideBarContainer: React.FC = () => {
  const router = useRouter();
  const [isSelect, setSelect] = useState(2);

  return (
    <Sidebar>
      {
        menuData.map((v, index) => 
          <MenuItem
            key={index} 
            selected={isSelect === index && true}
            onClick={() => {
              setSelect(index)
              router.push(v.path)
            }}
          >
            <Image src={v.img} alt="" />
            <span>{v.label}</span>
          </MenuItem>)
      }
      <MenuItem
        selected={isSelect === 6 && true}
        onClick={() => setSelect(6)}
      >
          <BsDiscord size={24}/>
          <span>Discord</span>
      </MenuItem>
    </Sidebar>
  );
};

export default SideBarContainer
