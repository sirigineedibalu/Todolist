import React from 'react'
import Kazar from './Kazar'

function Present() {
    let product1 = {
        id: 1,
        Name: <div className='bg-danger' style={{ height: '100px', width: "100px" }}></div>,
        aprice: 12222,
        someprice: 6776436543

    }



    return (



        <Kazar {...product1} />


    )
}

export default Present