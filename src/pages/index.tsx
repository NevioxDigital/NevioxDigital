import { About } from "@/components/landing-page/about";
import {Welcome} from "../components/landing-page/welcome";
import { Solution } from "@/components/landing-page/solutions";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About/>
      <Solution/>
    </>
  )
}
