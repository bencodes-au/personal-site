import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";

const iconMap = {
  github: <FaGithub size={24} />,
  linkedIn: <FaLinkedin size={24} />,
  guitar: <GiGuitar size={24} />,
};
export const ButtonIcon = ({ iconName }) => {
  if (!iconName || !Object.keys(iconMap).includes(iconName)) return null;
  return iconMap[iconName];
};
