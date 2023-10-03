import { CourseList } from "@/components/course"
import { Footer, Navbar, BreadCrumbs, Hero } from "@/components/common"
import { Walletbar, EthRates } from "@/components/web3"
import { OrderCard } from "@/components/order"
import { BaseLayout } from "@/components/layout"


export default function Home() {
  return (
    <>
      <Hero />
      <BreadCrumbs />
      <Walletbar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  )
}

Home.Layout = BaseLayout