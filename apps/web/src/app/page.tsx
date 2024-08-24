import HomePage from "@/features/home";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async ()=>{
  return <HomePage />
};

export default Home;