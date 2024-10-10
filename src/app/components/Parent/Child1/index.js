 
import CountCard from '../../Card/CountCard'
import SettingIcon from '@/app/Svg/SettingIcon'
import AverageIcon from '@/app/Svg/Average'
import TpsIcon from '@/app/Svg/Tps'
import LargestBlock from '@/app/Svg/Block'

function Child1() {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-8 ">
          <CountCard Icon={SettingIcon} title={'No. Of Nodes'} numb={18} />
          <CountCard Icon={AverageIcon} title={'Avg Block Time'} numb={5.00} additonalDesc={'Sec'} isRange={true} />
          <CountCard Icon={TpsIcon} title={'TPS'} numb={1500} additonalDesc={'+'} />
          <CountCard Icon={LargestBlock} title={'Largest Block'} numb={2920930} isRange={true} />
        </div>
  )
}

export default Child1