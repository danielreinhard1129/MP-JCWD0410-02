"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShootingStars } from "@/components/ui/shootingStars";
import { StarsBackground } from "@/components/ui/starsBackground";
import useRegister from "@/hooks/api/auth/useRegister";
import useRegister from "@/hooks/api/auth/useRegister";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import BottomGradient from "../components/bottomGradient";
import LabelInputContainer from "../components/labelInputContainer";
import { RegisterSchema } from "./schemas/RegisterSchema";
import Background from "/public/astronaut-background.svg";
import Logo from "/public/event-ally.svg";

const RegisterPage = () => {
  const { status } = useSession();
  const registerMutation = useRegister();

  const { status } = useSession();
  const registerMutation = useRegister();


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      referralCode: ""
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
     await registerMutation.mutateAsync(values)
     await registerMutation.mutateAsync(values)
    },
  });

  // const handleSocialLogin = async (provider: string) => {
  //   try {
  //     await signIn(provider, { callbackUrl: "/dashboard" });
  //   } catch (error) {
  //     setError(`Failed to login with ${provider}`);
  //     console.error(`${provider} login error:`, error);
  //   }
  // };
  // const handleSocialLogin = async (provider: string) => {
  //   try {
  //     await signIn(provider, { callbackUrl: "/dashboard" });
  //   } catch (error) {
  //     setError(`Failed to login with ${provider}`);
  //     console.error(`${provider} login error:`, error);
  //   }
  // };

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
          <h2 className="text-xl font-bold text-neutral-300">Register</h2>
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
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="name" className="ml-1">
                Name
              </Label>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {!!formik.touched.name && !!formik.errors.name ? (
                <p className="ml-1 text-sm text-red-400">
                  {formik.errors.name}
                </p>
              ) : null}
            </LabelInputContainer>
          </div>

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
              <p className="ml-1 text-sm text-red-400">{formik.errors.email}</p>
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
              <p className="ml-1 text-sm text-red-400">
                {formik.errors.password}
              </p>
            ) : null}
          </LabelInputContainer>

          <div className="mb-4">
            <LabelInputContainer>
              <Label htmlFor="role" className="ml-1">
                Role
              </Label>
              <select
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-md bg-slate-900 px-4 py-2 text-neutral-300 shadow-input dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              >
                <option value="">Select a role</option>
                <option value="buyer">Buyer</option>
                <option value="event_organizer">Event Organizer</option>
              </select>
              {!!formik.touched.role && !!formik.errors.role ? (
                <p className="ml-1 text-sm text-red-400">{formik.errors.role}</p>
              ) : null}
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="referralCode" className="ml-1">
              Referral Code (Optional)
            </Label>
            <Input
              name="referralCode"
              type="text"
              placeholder="Enter referral code"
              value={formik.values.referralCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {!!formik.touched.referralCode && !!formik.errors.referralCode ? (
              <p className="ml-1 text-sm text-red-400">
                {formik.errors.referralCode}
              </p>
            ) : null}
          </LabelInputContainer>



          <button
            className="group/btn dark:to-slate-from-slate-950 to-slate-from-slate-950 relative block h-10 w-full rounded-md bg-gradient-to-br from-slate-950 font-medium text-neutral-200 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-slate-900 dark:from-slate-950 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Register &rarr;
            <BottomGradient />
          </button>

          <p className="mt-4 flex justify-center font-semibold antialiased">
            <Label
              className="text-sm tracking-wide text-white/65"
              htmlFor="SignIn"
            >
              Already have an account ?
            </Label>
            <Link
              className="underline-animation-link ml-2 text-sm font-bold tracking-wide text-pink-200"
              href="/login"
            >
              Log In
            </Link>
          </p>

          <div className="my-5 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-slate-900 px-4 font-medium text-black shadow-input dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
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

export default RegisterPage;


