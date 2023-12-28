import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HorizontalNav = () => {
    const { showNav } = useSelector( ( state ) => state.nav );

    return (
        <div className={ ` w-full h-[50px] overflow-hidden bg-transparent` }>
            <div
                className={ ` relative h-[50px] bg-[#09405E] w-full  ${ showNav
                    ? "   top-0  transition-all duration-[800ms]  ease-in-out"
                    : "  -top-[50px] transition-all duration-[800ms]  ease-in-out"
                    }     ` }
            >
                <Link>Home</Link>
            </div>
        </div>
    )
}

export default HorizontalNav