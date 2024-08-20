"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface RegisterResult {
  isSuccess: boolean;
  message?: string;
  error?: string;
}

const useRegister = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation<RegisterResult, AxiosError, RegisterPayload>({
    mutationFn: async (payload: RegisterPayload) => {
      const { data } = await axiosInstance.post<RegisterResult>('/auth/register', payload);
      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Registration successful");
      router.push("/login"); // Assuming you want to redirect to login page after successful registration
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data?.message || "An error occurred during registration");
    },
  });
};

export default useRegister;