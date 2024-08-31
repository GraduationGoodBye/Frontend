"use client";

import React, { useEffect } from "react";
import { Flex } from "../../../shared/ui";
import { Icon } from "../../../shared/icon/icon";
import Image from "next/image";

type snsTypes = "google" | "naver" | "kakao";

const LoginButtons = () => {
  const handleLogin = (snsType: snsTypes) => {
    switch (snsType) {
      case "google":
        const data = getLoginStatus();
        console.log(data);
        break;

      default:
        alert(snsType);
        break;
    }
  };

  const getLoginStatus = async (): Promise<any> => {
    await fetch("/features/login/api");
  };

  return (
    <Flex.ColCenter className="gap-4">
      <button
        className="flex h-[78px] w-[366px] items-center justify-center gap-4 rounded-lg bg-[#03C75A] p-4 text-2xl text-white"
        onClick={() => {
          handleLogin("naver");
        }}
      >
        <Icon.NaverLogo width={36} height={36} /> Continue with NAVER
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleLogin("google");
        }}
      >
        <Image
          src={"/images/google_login.png"}
          width={366}
          height={78}
          alt={"google_login"}
        />
      </button>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
      <button
        className="flex h-[78px] w-[366px] items-center justify-center gap-4 rounded-lg bg-[#FEE500] p-4 text-2xl"
        onClick={() => {
          handleLogin("kakao");
        }}
      >
        <Icon.KakaoLogo /> Login with Kakao
      </button>
    </Flex.ColCenter>
  );
};

export default LoginButtons;
