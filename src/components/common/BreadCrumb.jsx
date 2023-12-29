import React from 'react'

const BreadCrumb = ( { page } ) => {
    return (
        <div className={ `h-12 md:h-14  ${ page.bg }` } >
            <div className="w-full h-full flex items-center justify-between  ss-container">
                <div className="text-lg font-bold ramto">
                    { page.title }
                </div>
                <div className="popins text-[16px]">
                    { page.path }
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb;