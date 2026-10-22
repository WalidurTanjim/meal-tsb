import { Banner } from "@/components/Banner/Banner";
import Meals from "@/components/Meals/Meals";
import useMeal from "@/hooks/useMeal";

export default function Home() {
  return (
    <div>
      <Banner />
      <Meals />
    </div>
  );
}
