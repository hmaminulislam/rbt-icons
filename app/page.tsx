import Header from "@/components/header/Header";
import IconResult from "@/components/icon-result/IconResult";
import { SliderProvider } from "@/context/SliderContext";

export default function Home() {
  return (
    <SliderProvider>
      <Header />
      <IconResult />
    </SliderProvider>
  );
}
