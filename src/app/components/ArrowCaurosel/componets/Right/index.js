
import LearnMoreBtn from '@/app/atoms/LearnMoreBtn'
import Paragraph from '@/app/atoms/Paragraph'
import Title from '@/app/atoms/Title'
import Topic5ire from '@/app/atoms/Topic5ire'
import { FiArrowRightCircle as ArrowRight ,FiArrowLeftCircle as ArrowLeft } from "react-icons/fi";
import { ArrowData } from '../../data/ArrowData';


export default function Right({ selectedIndex=0 ,handleForwardClick,handlePrevClick}) {
    return (
        <div className="flex flex-col  gap-3 w-full">
            <div className="flex w-full items-center justify-between">
                <Topic5ire
                    value={ArrowData[selectedIndex].buttonValue}
                    cssMain={`max-w-max border border-[#57CC55] text-[#57CC55] bg-[#14532d] `}   
                />
                <div className="flex gap-2 z-20 relative">

                   <ArrowLeft className="text-[#8B57E3] text-4xl" onClick={handlePrevClick}/>
                   <ArrowRight className="text-[#8B57E3] text-4xl" onClick={handleForwardClick}/>
                     
                  </div>
            </div>

         
            <Title title={ArrowData[selectedIndex].title}   />
            <Paragraph desc={ArrowData[selectedIndex].desc}/>
               <div>
            <LearnMoreBtn href={ArrowData[selectedIndex].href} />

            </div>
            
        </div>
    )
}
