import BoxCard from "../../Card/BoxCard";

export default function Child4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BoxCard imgSrc={'/images/build.webp'} title={`Build`} desc={`5ire's SPoS rewards sustainable practices, aligning blockchain incentives with environmental responsibility.`} href={'/'} titleCss="mt-4 text-center"/>
          <BoxCard imgSrc={'/images/explore2.webp'} title={`Explore`} desc={`With EVM/Wasm compatibility, easily deploy solidity smart contracts on the 5ireEVM chain and leverage WASM environment for future-proofing and high performance.`} href={'/'} titleCss="mt-4 text-center"/>
          <BoxCard imgSrc={'/images/connect.webp'} title={`Connect`} desc={`As RWAs continue to grow exponentially, 5ire is at the forefront of providing trusted and immutable sustainability data linked to Real World Assets.`} href={'/'} titleCss="mt-4 text-center"/>
        </div>
  )
}
