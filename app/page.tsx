import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import IconResult from "@/components/icon-result/IconResult";
import { SliderProvider } from "@/context/SliderContext";

export default function Home() {
  return (
    <SliderProvider>
      <div className="min-h-[100dvh] flex flex-col justify-between">
        <div>
          <Header />
          <IconResult />
        </div>
        <Footer />
      </div>
    </SliderProvider>
  );
}
