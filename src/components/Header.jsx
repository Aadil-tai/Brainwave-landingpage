import React, { useEffect, useState } from 'react'
import brainwave from '../assets/brainwave.svg'
import { navigation } from '../constants'
import Button from './Button'

const Header = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash);
    const [openNavigation, setopenNavigation] = useState(false);

    useEffect(() => {
        const handleHashChange = () => setActiveHash(window.location.hash)
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    return (
        <div className={`fixed top-0 w-full h-16 bg-n-8/90 lg:bg-n-8/90 backdrop-blur-sm z-50 ${openNavigation ? 'bg-n-8' : 'bg-n-8/9'}`}>
            <div className='flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4'>
                <a className="block w-[12rem] xl:mr-8" href='#hero'>
                    <img src={brainwave} width={190} height={40} alt="Brainwave" />
                </a>

                <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-5'>
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block relative font-code text-2xl uppercase text-n-1 hover:text-color-1 transition-all duration-300 
                                    ${item.onlyMobile ? "lg:hidden" : ""}
                                    px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                                    ${item.url === activeHash ? 'z-2 lg:text-n-1' : 'text-n-1/50 lg:text-n-1/50'}`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block ml-auto'>
                    New Account
                </a>

                <Button> sign in</Button>
            </div>
        </div>
    )
}

export default Header
