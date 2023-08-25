import React from "react";
import classNames from "./Banner.module.css";

type BannerProps = {
    img: string
}

export default function Banner({img}: BannerProps) {
    return (
       <div className={classNames.banner}>Banner</div>
    );
};