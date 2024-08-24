"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShootingStars } from "@/components/ui/shootingStars";
import { StarsBackground } from "@/components/ui/starsBackground";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import BottomGradient from "../components/bottomGradient";
import LabelInputContainer from "../components/labelInputContainer";
import Background from "/public/astronaut-background.svg";
import Logo from "/public/event-ally.svg";
import { useRouter } from "next/navigation";
import { LoginSchema } from "./schemas/LoginSchema";
import { useSession, signIn } from "next-auth/react";
import useLogin from "@/hooks/api/auth/useLogin";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const loginMutation = useLogin();
  const loginMutation = useLogin();

  // useEffect(() => {
  //   if (session) {
  //     if (session.user.role === "buyer") {
  //       router.replace("/homepage");
  //     } else if (session.user.role === "event organizer") {
  //       router.replace("/dashboard");
  //     }
  //   }
  // }, [session, router]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "event organizer", // Default role
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        await loginMutation.mutateAsync(values);
      } catch (error) {
        setError("An error occurred during login");
        console.error("Login error:", error);
      }
    },
  });

  const handleSocialLogin = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/role-selection" });
    } catch (error) {
      setError(`Failed to login with ${provider}`);
      console.error(`${provider} login error:`, error);
    }
  };

  const isPasswordValid = formik.values.password.length > 6;

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <main className="relative z-10 flex h-screen items-center justify-center overflow-hidden">
      <Image
        className="absolute -z-10 object-cover"
        width={0}
        height={0}
        src={Background}
        alt="404 Page"
        fill
        priority
      />
      <div className="mx-auto w-full max-w-md rounded-none bg-transparent p-4 shadow-input md:rounded-2xl md:p-8">
        <div className="ml-7 mr-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-300">Login</h2>
          <Link href="/">
            <Image
              className="object-cover"
              width={180}
              height={180}
              src={Logo}
              alt="evenyally-logo"
              priority
            />
          </Link>
        </div>
        <form
          className="my-8 text-neutral-800 dark:text-neutral-200"
          onSubmit={formik.handleSubmit}
        >
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="ml-1">
              Email Address
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {!!formik.touched.email && !!formik.errors.email ? (
              <p className="ml-2 text-sm font-bold tracking-wide text-pink-300">
                {formik.errors.email}
              </p>
            ) : null}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className="ml-1">
              Password
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {!!formik.touched.password && !!formik.errors.password ? (
              <p className="ml-[6px] text-sm font-bold tracking-wide text-pink-300">
                {formik.errors.password}
              </p>
            ) : null}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="role" className="ml-1">
              Role
            </Label>
            <select
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-md bg-transparent px-3 py-2 text-sm shadow-sm"
            >
              <option value="buyer">Buyer</option>
              <option value="event organizer">Event Organizer</option>
            </select>
          </LabelInputContainer>

          {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

          <button
            disabled={!isPasswordValid}
            className="group/btn dark:to-slate-from-slate-950 to-slate-from-slate-950 relative block h-10 w-full rounded-md bg-gradient-to-br from-slate-950 font-medium text-neutral-200 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-slate-900 dark:from-slate-950 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Log In &rarr;
            <BottomGradient />
          </button>

          <label className="mb-3 mr-1 mt-2 flex justify-end">
            <Link
              className="ml-2 text-sm font-bold tracking-wide text-pink-200 transition-colors duration-300 hover:text-pink-200/70"
              href="/forgot-password"
            >
              Forgot password ?
            </Link>
          </label>

          <p className="mt-4 flex justify-center font-semibold antialiased">
            <Label
              className="text-sm tracking-wide text-white/65"
              htmlFor="SignIn"
            >
              Don't have an account ?
            </Label>
            <Link
              className="underline-animation-link ml-2 text-sm font-bold tracking-wide text-pink-200"
              href="/register"
            >
              Register
            </Link>
          </p>

          <div className="my-5 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-slate-900 px-4 font-medium text-black shadow-input dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              onClick={() => handleSocialLogin("github")}
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-slate-900 px-4 font-medium text-black shadow-input dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              onClick={() => handleSocialLogin("google")}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
      <div className="-z-10">
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
};

export default LoginPage;
