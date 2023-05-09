import { About } from "@/components/landing-page/about";
import {Welcome} from "../components/landing-page/welcome";
import { Solution } from "@/components/landing-page/solutions";
import { HireUs } from "@/components/landing-page/hire-us";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About/>
      <Solution/>
      <HireUs/>
    </>
  )
}
