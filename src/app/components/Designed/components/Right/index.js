import Button5ire from '@/app/atoms/Button5ire';
import Title from '@/app/atoms/Title';

export default function Right({
  btnColor,
  href,
  btnValue,
  title,
  desc,
  isPercent,
  percentValue,
  sibling,
  percentName,
  borderColor
}) {

 
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Button5ire 
        value={btnValue} 
        cssMain={`max-w-max border ${borderColor} ${btnColor}`} 
        href={href} 
      />
      <Title title={title} />
      <p className="text-slate-600">{desc}</p>
      {isPercent && (
        <div className="mt-3">
          <p className= {`text-2xl  ${btnColor} `} >{percentValue} {sibling}</p>
          <p className="text-slate-600 uppercase">{percentName}</p>
        </div>
      )}
    </div>
  );
}
