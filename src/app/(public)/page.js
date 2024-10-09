import HomeLanding from "../components/HomeLanding";
import CountCard from "../components/Card/CountCard";
import SettingIcon from "../Svg/SettingIcon.js";
import Container from "../atoms/Container";
import AverageIcon from "../Svg/Average";
import TpsIcon from "../Svg/Tps";
import LargestBlock from "../Svg/Block";
import BoxCard from "../components/Card/BoxCard";

export default function Home() {
  return (
    <main >
      <HomeLanding />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-8 ">
          <CountCard Icon={SettingIcon} title={'No. Of Nodes'} numb={18} />
          <CountCard Icon={AverageIcon} title={'Avg Block Time'} numb={5.00} additonalDesc={'Sec'} isRange={true} />
          <CountCard Icon={TpsIcon} title={'TPS'} numb={1500} additonalDesc={'+'} />
          <CountCard Icon={LargestBlock} title={'Largest Block'} numb={2920930} isRange={true} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BoxCard imgSrc={'/images/leaf.webp'} title={`Substainable Proof Of Stake`} desc={`5ire's SPoS rewards sustainable practices, aligning blockchain incentives with environmental responsibility.`} href={'/'} />
          <BoxCard imgSrc={'/images/evm.webp'} title={`Dual-Chain Smart Contracts`} desc={`With EVM/Wasm compatibility, easily deploy solidity smart contracts on the 5ireEVM chain and leverage WASM environment for future-proofing and high performance.`} href={'/'} />
          <BoxCard imgSrc={'/images/RWA.webp'} title={`Real World Asset Integration`} desc={`As RWAs continue to grow exponentially, 5ire is at the forefront of providing trusted and immutable sustainability data linked to Real World Assets.`} href={'/'} />

        </div>
      </Container>

    </main>
  );
}
