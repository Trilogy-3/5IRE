 
import Card from '../card'
import { TbTargetArrow as Mission } from "react-icons/tb";
import { TbEyeDotted as Vision } from "react-icons/tb";
export default function MissionVision() {
  return (
      <div className='  grid grid-cols-1 md:grid-cols-2 gap-7   '>
         
             <Card  icon={Vision} desc='5ireChain envisions itself as a leading blockchain ecosystem for the 5th Industrial Revolution (5IR), fostering and incentivizing self-governing DAOs towards sustainable development. Our core business concept revolves around the for-benefit paradigm, encapsulated in our proof-of-benefit model. This model promotes sustainable practices that benefit the environment, ensuring that business entities not only focus on profitability but also integrate sustainability into their fundamental operations.' title='Our Vision'/>
           <Card cssMain='backdrop-blur-xl ' icon={Vision} desc='5ireChain envisions itself as a leading blockchain ecosystem for the 5th Industrial Revolution (5IR), fostering and incentivizing self-governing DAOs towards sustainable development. Our core business concept revolves around the for-benefit paradigm, encapsulated in our proof-of-benefit model. This model promotes sustainable practices that benefit the environment, ensuring that business entities not only focus on profitability but also integrate sustainability into their fundamental operations.' title='Our Vision'/>
          
          </div>
  )
}
