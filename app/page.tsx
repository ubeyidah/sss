import { Hero } from "./_components/hero";
import Wrapper from "@/components/ui/wrapper";
import { Philosophy } from "./_components/philosophy";
import { Rules } from "./_components/rules";
import { Playground } from "./_components/playground";
import { Footer } from "./_components/footer";

export default function Page() {

  return (
    <Wrapper as="main" className="border-x border-primary/15">
      <Hero />
      <Philosophy />
      <Playground />
      <Rules />
      <Footer />
    </Wrapper>
  );
}
