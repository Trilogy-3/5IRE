import { ArrowData } from "../../data/ArrowData";

 

export default function Left({selectedIndex}) {
  return (
      <div className="w-full h-auto md:h-64">
      <img src={ArrowData[selectedIndex] .image} className="h-full w-full object-contain "/>
      </div>
  )
}
