import React from 'react'

function Model3d({ array }) {
    const e = 40
    const h = 5
    console.log(array)
    return (
        <div className='w-100 h-100 d-block'>
            <div className='base'>
                {
                    array.map((el, k) => {
                        return (


                            el.map((element, i) => {
                                return (
                                    element.map((element2, j) => {
                                        if (element2) {
                                            return (
                                                <div key={i * 100 + j} className={`${k == 0 ? 'floor' : (k == 1 ? 'wall' : 'roof')} cube`} style={{ transform: `translate3d(${j * e + 50}px,${k == 0 ? "200px" : ((k == 1) ? `50px` : "20px")},${(i * e) - 400}px)` }}>
                                                    <div className="top"></div>
                                                    <div className="front "></div>
                                                    <div className="right "></div>
                                                    <div className="left "></div>
                                                </div>
                                            )
                                        }
                                    })
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Model3d