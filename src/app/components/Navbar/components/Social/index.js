 
import Link from "next/link";
import { FaGithub as Github,FaDiscord as Discord  } from "react-icons/fa";
import {FaXTwitter as Twitter  } from "react-icons/fa6";
export default function Social() {
  return (
      <div className="flex flex-row gap-5 items-center">
          <SocialLinks icon={Github} href={"https://github.com/5ire-tech"} />
          <SocialLinks icon={Twitter} href={"https://x.com/5ireChain"} />
          <SocialLinks icon={Discord} href={"https://discord.com/invite/5ire"} />
    </div>
  )
}

function SocialLinks({href,icon:Icon}){
    return (
    <Link href={href} className="flex flex-row items-center"> <Icon className="text-white text-2xl"/> </Link>
)
}