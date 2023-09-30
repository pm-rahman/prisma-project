import ItemsSection from "@/component/page/home/ItemsSection";
import Banner from "@/component/page/home/banner";

export default function Home() {
  return (
    <h2 className="flex flex-col gap-8">
      <Banner/>
      <ItemsSection/>
    </h2>
  )
}
