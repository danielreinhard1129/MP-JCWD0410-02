"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";

export default function AuthGuard(Component: any) {
  return function IsAuth(props: any) {
    const { id } = useAppSelector((state: { user: any; }) => state.user);

    if (!id) {
      return redirect("/login");
    }

    return <Component {...props} />;
  };
}
