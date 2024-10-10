import Right from "../Right";

export default function DesignedCauroselItem({ videoLink,
  btnColor,
  btnHref,
  btnValue,
  title,
  desc,
  isPercent,
  percentValue,sibling,percentName,
  borderColor }) {


  return (

    <div className="flex flex-col md:flex-row justify-between items-center" >
      <div className="h-80 w-full">
        <video src={videoLink} autoPlay muted />
      </div>
      <Right
        btnColor={btnColor}
        href={btnHref}
        btnValue={btnValue}
        title={title}
        desc={desc}
        isPercent={isPercent}
        percentValue={percentValue}
        sibling={sibling}
        percentName={percentName}
        borderColor={borderColor}
      />
    </div>

  );
}
