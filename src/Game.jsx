import React from 'react'
import { useEffect, useState, useContext } from 'react'

import cork from './media/nemo/cork.png'
import elephant from './media/nemo/elephant.png'
import hemp from './media/nemo/hemp.png'
import bamboo from './media/nemo/bamboo.png'
import mycilium from './media/nemo/mycilium.png'
import straw from './media/nemo/straw.png'

import Model3d from './Model3d'

import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

function Game({ materials }) {

    const [stage, setStage] = useState(1);
    const [mat, setMat] = useState(1)

    const floor = new Array();
    const myArr1 = Array(10).fill(0);
    for (var i = 0; i < 10; i++) {
        floor[i] = Array.from(myArr1);
    }

    const wall = new Array();
    const myArr2 = Array(10).fill(0);
    for (var i = 0; i < 10; i++) {
        wall[i] = Array.from(myArr2);
    }

    const roof = new Array();
    const myArr3 = Array(10).fill(0);
    for (var i = 0; i < 10; i++) {
        roof[i] = Array.from(myArr3);
    }

    const total = [floor, wall, roof]
    const [arr, setArr] = useState(total)
    const cuber1 = (i, j) => {
        setArr((prev) => {
            const board = prev; //Array.from(prev)
            if (board[0][j][i]) { board[0][j][i] = 0 } else { board[0][j][i] = 1 };
            return [...board]
        })
    }
    const cuber2 = (i, j) => {
        setArr((prev) => {
            const board = prev; //Array.from(prev)
            if (board[1][j][i]) { board[1][j][i] = 0 } else { board[1][j][i] = 1 };
            return [...board]
        })
    }
    const cuber3 = (i, j) => {
        setArr((prev) => {
            let board = prev; //Array.from(prev)
            if (board[2][j][i]) { board[2][j][i] = 0 } else { board[2][j][i] = 1 };
            return [...board]
        })
    }


    return (
        <div className='w-100 h-100'>
            {/* <h1>Building a house</h1> */}
            <div className='w-100 row' style={{ height: '500px' }} >
                <div className='col-7 p-2 bg-dark rounded'>
                    <Tabs id="controlled-tab-example" activeKey={stage} onSelect={(k) => setStage(k)}
                        className="d-none mb-3">
                        <Tab className='row' eventKey="1" title="1">
                            <div className='text-light'>Floor</div>
                            <div className='d-flex px-2 justify-content-evenly'>
                                {
                                    [...Array(10).keys()].map((v, i) => {
                                        return (
                                            <div key={i} className=''>
                                                {
                                                    [...Array(10).keys()].map((v, j) => {
                                                        return (
                                                            <div key={j} className={`${arr[0][j][i] ? "bg-info" : "bg-light"} rounded p-4 m-1`} onClick={() => { cuber1(i, j) }}></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </Tab>
                        <Tab className='row' eventKey="2" title="2">
                            <div className='text-light'>Wall</div>
                            <div className='d-flex px-2 justify-content-evenly'>
                                {
                                    [...Array(10).keys()].map((v, i) => {
                                        return (
                                            <div key={i} className=''>
                                                {
                                                    [...Array(10).keys()].map((v, j) => {
                                                        return (
                                                            <div key={j} className={`${arr[1][j][i] ? "bg-info" : "bg-light"} rounded p-4 m-1`} onClick={() => { cuber2(i, j) }}></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </Tab>
                        <Tab className='row' eventKey="3" title="3">
                            <div className='text-light'>Roof</div>
                            <div className='d-flex px-2 justify-content-evenly'>
                                {
                                    [...Array(10).keys()].map((v, i) => {
                                        return (
                                            <div key={i} className=''>
                                                {
                                                    [...Array(10).keys()].map((v, j) => {
                                                        return (
                                                            <div key={j} className={`${arr[2][j][i] ? "bg-info" : "bg-light"} rounded p-4 m-1`} onClick={() => { cuber3(i, j) }}></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </Tab>

                    </Tabs>


                </div>





                <div className='col-5 d-flex flex-column'>
                    <div className=' h-75 d-flex flex-column'>
                        <div>Now, You can use the materials you have chose previously, to help Bob build his house. Just remember that each material is applicable at special parts of the house.</div>
                        <div className='bg-light flex-grow-1'>
                            <Model3d array={arr} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly h-25'>
                        <div onClick={() => { setMat(1); setStage(1) }} className={`rounded p-2 text-center m-2 bg-info w-100 ${mat == 1 ? 'selected2' : ''}`}>
                            <img src={`${materials.includes("straw") ? straw : elephant}`} alt="" className='h-100 w-100' style={{ objectFit: "contain" }} />
                        </div>
                        <div onClick={() => { setMat(2); setStage(2) }} className={`rounded p-2 text-center m-2 bg-warning w-100 ${mat == 2 ? 'selected2' : ''}`}>
                            <img src={`${materials.includes("mycilium") ? mycilium : cork}`} alt="" className='h-100 w-100' style={{ objectFit: "contain" }} />
                        </div>
                        <div onClick={() => { setMat(3); setStage(3) }} className={`rounded p-2 text-center m-2 bg-danger w-100 ${mat == 3 ? 'selected2' : ''}`}>
                            <img src={`${materials.includes("hemp") ? hemp : bamboo}`} alt="" className='h-100 w-100' style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Game