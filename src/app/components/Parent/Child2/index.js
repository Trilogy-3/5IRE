import BoxCard from "../../Card/BoxCard";

export default function Child2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BoxCard imgSrc={'/images/leaf.webp'} title={`Substainable Proof Of Stake`} desc={`5ire's SPoS rewards sustainable practices, aligning blockchain incentives with environmental responsibility.`} href={'/'} />
          <BoxCard imgSrc={'/images/evm.webp'} title={`Dual-Chain Smart Contracts`} desc={`With EVM/Wasm compatibility, easily deploy solidity smart contracts on the 5ireEVM chain and leverage WASM environment for future-proofing and high performance.`} href={'/'} />
          <BoxCard imgSrc={'/images/RWA.webp'} title={`Real World Asset Integration`} desc={`As RWAs continue to grow exponentially, 5ire is at the forefront of providing trusted and immutable sustainability data linked to Real World Assets.`} href={'/'} />
        </div>
  )
}
