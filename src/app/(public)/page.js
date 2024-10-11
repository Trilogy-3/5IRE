import HomeLanding from "../components/HomeLanding";

import Container from "../atoms/Container";
 
import Child1 from "../components/Parent/Child1";
import Child2 from "../components/Parent/Child2";
import Child3 from "../components/Parent/Child3";
import Child4 from "../components/Parent/Child4";
import ArrowCaurosel from "../components/ArrowCaurosel";

export default function Home() {
  return (
    <main >
      <HomeLanding />
      <Container>
         <Child1/>
         <Child2 />
        <Child3 />
        <Child4 />
        <ArrowCaurosel/>

       
      </Container>

    </main>
  );
}
