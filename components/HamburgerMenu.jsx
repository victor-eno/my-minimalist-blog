import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

 const HamburgerMenu = () => {
 const Links = () => (
    <div className='flex'>
    <div className='flex-none'>
    <Link href="/"><a className='font-bold p-8'>LOGO</a></Link>
    </div>
    <div className='absolute right-4'>
    <Link href="/about"><a className='font-bold p-4'>About</a></Link>
    </div>
    </div>
    )
 const Logo = () => (
    <Link href="/"><a className='font-bold p-4'>LOGO</a></Link>
 ) 
 const About = () => (
    <Link href="/about"><a className='font-bold p-4'>About</a></Link>  
 )
 const HamburgerMenu = () => (<div className='relative p-1'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
        <About />
    </Menu>
</div>)
const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-8 text-cyan-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)
   
return (
        <div className='max-w-full h-12 flex justify-start sticky top-0 z-50  items-center bg-zinc-600 mb-4 text-cyan-400 py-9'>
            <div className='flex md:hidden'>
                <HamburgerMenu />
            </div>
            <div className='flex md:hidden'>
                <Logo />
            </div>
            <div className='hidden md:flex'>
                <Links />
            </div>
        </div>

    )
}

export default HamburgerMenu