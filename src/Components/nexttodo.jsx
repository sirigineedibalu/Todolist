import React, { useState } from 'react'

function Something() {
    const [name, updatename] = useState("Real me 8 pro")
    return (
        <div>

            <div className="maincontainer">
                <p>{name}</p>

                <input type="text" id='pname' />
                <button onClick={() => {

                    let many = document.getElementById("pname").value
                    updatename((previous) => {
                        return previous + many
                    })

                }}>add</button>


            </div>



        </div>
    )
}

export default Something