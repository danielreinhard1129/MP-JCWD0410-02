"use client";

import LandingPage from "@/features/landingpage";
import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

//pake next auth
const useLogin = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: async (data) => {
      console.log("dataaaa", data.role);

      console.log("dataaaa", data.role);

      await signIn("credentials", { ...data, redirect: false });
      alert("Login success");

      if(data.role === 'BUYER') {
      router.push("/landingpage");
      } else {
        router.push("/dashboard")
      }

      // if(data.role === "BUYER") {
      //   router.push("/landingpage");
      // }
      
      
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useLogin;
