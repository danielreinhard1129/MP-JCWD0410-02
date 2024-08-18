import HomePage from "@/features/home";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async ()=>{
  const session = await auth();

  if(session){
    return redirect("/login");

  }
  return <HomePage />
};

export default Home;