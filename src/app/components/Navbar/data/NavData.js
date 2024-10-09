 const menuItems = [
  {
    name: "Home",
    href: "/",
    isChildren: false
  },
  {
    name: "Developers",
    children: [
      { name: "Documentation", href: '',isOtherPage:true},
      { name: "Grant Program", href: '',isOtherPage:false },
      { name: "Build", href: '', isOtherPage:false}
    ],
    isChildren: true
  },
  {
    name: "Networks",
    children: [
      { name: "Validator App", href: '',isOtherPage:true },
      { name: "Nominator App", href: '',isOtherPage:true },
      { name: "5ire Explorer", href: '',isOtherPage:true },
      { name: "5ire Staking", href: '' ,isOtherPage:true}
    ],
    isChildren: true
  },
  {
    name: "Community",
      children: [
      { name: "Community", href: '' ,isOtherPage:false},
      { name: "Partner With Us", href: '',isOtherPage:true },
      { name: "Blog", href: '' ,isOtherPage:false},
      { name: "News & Events", href: '' ,isOtherPage:false}
    ],
    isChildren: true
  },
  {
    name: "Ecosystem",
    href: "",
    
    isChildren: false
  },
  {
    name: "About",
    children: [
      { name: "About Us", href: '',isOtherPage:false },
      { name: "Contact", href: '',isOtherPage:false}
    ],
    isChildren: true
  }
];

export default menuItems