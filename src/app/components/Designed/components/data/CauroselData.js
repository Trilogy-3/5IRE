const data = [{
    btnValue: 'Future-Proof',
    btnColor: 'text-[#8B57E3]',
    borderColor:'border-[#8B57E3]',
    
    title: 'Positioned for Scalability',
    btnHref: '/',
    desc: `5ire's infrastructure is future-proof, designed to handle increasing transaction volumes and adapt to evolving technological advancements without compromising performance.`,
    isPercent:false,
    videoLink:'/videos/innovation.webm'
},
{
    btnValue: 'Sustainable',
    btnColor: 'text-[#57CC55]',
    borderColor:'border-[#57CC55]',
    
    title: 'Redefining Sustainable Scaling',
    btnHref: '/',
    desc: `Scale sustainably with 5ire, designed for high-volume transactions while maintaining a minimal environmental footprint.`,
    isPercent:true,
    percent: {
        value: 45,
        sibling:' %',
        name:'LESS ENERGY USAGE'
    },
     
    videoLink:'/videos/scaling.webm'
    },
{
    btnValue: 'RWA Focused',
    btnColor: "text-[#FFFFFF]",
    borderColor:'border-[#FFFFFF]',
    title: 'Real-World Asset Tokenization',
    btnHref: '/',
    desc: `Transform physical assets into digital tokens with 5ire. Our blockchain technology simplifies the process, enhancing liquidity and creating new opportunities for sustainable investments.`,
    isPercent:true,
      percent: {
        value: 100,
        sibling: '%',
        name:'IMPACT-DRIVEN'
    },
    videoLink:'/videos/security.webm'
    },
{
    btnValue: 'Fast',
    btnColor: 'text-[#00A7DC]',
    borderColor:'border-[#00A7DC]',
    title: 'Efficiency Redefined',
    btnHref: '/',
    desc: `Experience unparalleled speed with 5ire. Our blockchain boasts ultra-fast transaction times, ensuring swift and efficient processes.`,
    isPercent: true,
    percent: {
        value: 1500,
        sibling: '+',
        name:'TRANSACTIONS PER SECOND'
    },
    videoLink:'/videos/efficiency.webm'
    }]

    export {data}