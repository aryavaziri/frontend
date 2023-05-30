import { useEffect, useState, useContext } from 'react'
import { Row, Col, Container, Modal, Button } from 'react-bootstrap'
import explainer from './media/nemo/3.png'
import house from './media/nemo/2.png'
import Game from './Game'

import { Player } from 'video-react';

import cork from './media/nemo/cork.png'
import elephant from './media/nemo/elephant.png'
import hemp from './media/nemo/hemp.png'
import bamboo from './media/nemo/bamboo.png'
import mycilium from './media/nemo/mycilium.png'
import straw from './media/nemo/straw.png'

import bg1 from './media/nemo/bg.png'
import bg2 from './media/nemo/bg3.png'
import an1 from './media/nemo/girl.png'
import an from './media/nemo/animation.mp4'


// import material1 from '../media/images/1.JPG'
// import material2 from '../media/images/2.JPG'
// import material3 from '../media/images/3.JPG'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Modal from 'react-bootstrap/Modal';

// import Sonnet from '../../components/Sonnet';

function HomeScreen() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [key, setKey] = useState('1');
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState('');

    const [m1, setm1] = useState('');
    const [m2, setm2] = useState('');
    const [m3, setm3] = useState('');
    const [m4, setm4] = useState('');
    const [m5, setm5] = useState('');
    const [m6, setm6] = useState('');

    const [matArr, setMatArr] = useState([]);

    const [i, seti] = useState(50);
    const [j, setj] = useState(50);
    const [k, setk] = useState(50);
    const inci = () => i < 300 ? seti(i + 30) : null
    const incj = () => j < 300 ? setj(j + 15) : null
    const inck = () => k < 300 ? setk(k + 20) : null
    const inc = () => { inci(); incj(); inck(); console.log(matArr) }
    useEffect(() => {
        if (((i == 300) && (j == 300)) && (k == 300)) {
            setShow(true)
        }
    }, [i, j, k])
    let interval
    useEffect(() => {
        const timer = setTimeout(() => {
            nextpage()
        }, 10000);
        return () => clearTimeout(timer);
    }, [key]);

    // useEffect(()=>{

    // },[hover, setHover])

    useEffect(() => {
        seti(30);
        setj(15);
        setk(20);
    }, [key])
    const nextpage = () => {
        if (key == "1") {
            setKey("2")
        } else
            if (key == "2") {
                setKey("3")
            }
    }

    return (
        <>
            <div className='m-0 px-5' style={{ backgroundImage: `url(${((key == 1) || (key == 2)) ? bg1 : bg2})`, height: `100vh`, width: `100vw`, backgroundSize: `cover`, backgroundPosition: `center` }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    style={{ backgroundImage: "url(" + { bg1 } + ")" }}
                >
                    <Tab className='row' eventKey="1" title="Desc">
                        <div className='col-5 mx-auto' style={{ height: "80vh" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-75 pb-2 bg-light rounded' style={{
                                    marginLeft: "45%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    Hi, my name is Nemora and I will be your guide as you play this game about SUSTAINABLE CONSTRUCTION MATERIALS
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="2" title="Desc">
                        <div className='col-5 mx-auto' style={{ height: "80vh" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-75 pb-4 bg-light rounded' style={{
                                    marginLeft: "45%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    We are going to build the house together at the end of the game using these materials
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="3" title="Start">
                        <div onClick={() => { setKey('6a') }} className='p-3 text-center w-25 mx-auto rounded fs-1' style={{ backdropFilter: `blur(5px)`, cursor: "pointer", marginTop: "30%", boxShadow: "1px 5px 16px 8px #4F807C", color: "#E1AC84", fontWeight: "bolder", backgroundColor: "#4F607C" }}>START</div>
                    </Tab>


                    <Tab className='row justify-content-center position-relative' eventKey="6a" title="Floor">
                        <div className='row justify-content-between p-2 materials' style={{ height: "40vh" }}>
                            <div onMouseOver={() => { setHover("straw") }} onClick={() => { setKey('6b'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'straw']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m1 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={straw} />
                                <h3 className='text-center'>Straw bales</h3>
                            </div>
                            <div onMouseOver={() => { setHover("elephant") }} onClick={() => { setKey('6b'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'elephant grass']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m2 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={elephant} />
                                <h3 className='text-center'>Elephant grass</h3>
                            </div>
                        </div>
                        <div className='col-5 mx-auto position-absolute' style={{ top: "20vh", left: "30%" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-50 pb-4 bg-light rounded' style={{
                                    opacity: "80%",
                                    marginLeft: "15%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    {hover == "" ?
                                        "We are going to build the house together at the end of the game using these materials" :
                                        (hover == "elephant" ? "The elephant grass is a tall grass native in Asia nad Africa suitable for roofs" :
                                            "The straws are usually stored as bundles gotten from dry stalks of cereals and used as insulation in walls and ceilings")}
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>

                    <Tab className='row justify-content-center position-relative' eventKey="6b" title="Wall">
                        <div className='row justify-content-between p-2 materials' style={{ height: "40vh" }}>
                            <div onMouseOver={() => { setHover("mycilium") }} onClick={() => { setKey('6c'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'straw']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m1 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={mycilium} />
                                <h3 className='text-center'>Mycelium</h3>
                            </div>
                            <div onMouseOver={() => { setHover("cork") }} onClick={() => { setKey('6c'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'elephant grass']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m2 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={cork} />
                                <h3 className='text-center'>Cork tree</h3>
                            </div>
                        </div>
                        <div className='col-5 mx-auto position-absolute' style={{ top: "20vh", left: "30%" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-50 pb-4 bg-light rounded' style={{
                                    opacity: "80%",
                                    marginLeft: "15%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    {hover == "cork" ?
                                        "The Cork tree can be used as an insulator or as a floor finishing after proccessing" :
                                        (hover == "mycilium" ? "Mycilium is a type of mushroom that can be used as a material to make a wall of your house" :
                                            "Select am material for wall")}
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>

                    <Tab className='row justify-content-center position-relative' eventKey="6c" title="Roof">
                        <div className='row justify-content-between p-2 materials' style={{ height: "40vh" }}>
                            <div onMouseOver={() => { setHover("hemp") }} onClick={() => { setKey('7'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'straw']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m1 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={hemp} />
                                <h3 className='text-center'>Hemp</h3>
                            </div>
                            <div onMouseOver={() => { setHover("bamboo") }} onClick={() => { setKey('7'); setHover(''); seti(0); setj(0); setk(0); setMatArr([...matArr, 'elephant grass']) }} className={`col-4 d-flex flex-column justify-content-center m-3 p-5 rounded overflow-hidden ${m2 ? ' selected' : ''}`} >
                                <img className='p-2' style={{ height: "300px", objectFit: "contain" }} src={bamboo} />
                                <h3 className='text-center'>Bamboo</h3>
                            </div>
                        </div>
                        <div className='col-5 mx-auto position-absolute' style={{ top: "20vh", left: "30%" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-50 pb-4 bg-light rounded' style={{
                                    opacity: "80%",
                                    marginLeft: "15%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    {hover == "bamboo" ?
                                        "Bamboo is an evergreen plenial flowering plant use for making walls and floor and roof." :
                                        (hover == "hemp" ? "Hemp is a plant can be used to make hempcrete which is good for using as a walls and roof " :
                                            "Select am material for roof")}
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="7" title="Desc">
                        <div className='col-5 mx-auto' style={{ height: "80vh" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-75 pb-4 bg-light rounded' style={{
                                    marginLeft: "45%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    Now you have chosen your materials see the proccess from growing to building your house
                                    <div onClick={() => { setKey(8) }} className='p-2 mx-auto mt-4 text-center align-items-center on-hover rounded-pill' style={{ userSelect: 'none', lineHeight: "20px", fontSize: 22, width: "120px", height: "40px", background: "#4F607C", boxShadow: "1px 0 20px 8px #555", color: "white" }}>Next</div>
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>


                    <Tab className='row justify-content-center position-relative' style={{ maxWidth: "1200px", margin: "0 auto" }} eventKey="8" title="Growing">

                        <Modal backdrop="static" className='mt-5' centered show={show} onHide={handleClose}>
                            <Button className='p-3 fs-2' variant="success" onClick={() => { handleClose(); setKey("10") }}>
                                Congratulations! Job is done. Now you can build your house.
                            </Button>
                        </Modal>
                        <div className='d-flex row'>
                            <div className='col-2 justify-content-around align-items-center d-flex flex-column'>
                                <div onClick={inc} className='p-2 m-0 text-center align-items-center on-hover' style={{ userSelect: 'none', lineHeight: "100px", fontSize: 22, width: "120px", height: "120px", borderRadius: "50%", background: "#4F607C", boxShadow: "1px 0 20px 8px #555", color: "white" }}>Water</div>
                                <div onClick={inc} className='p-2 m-0 text-center align-items-center on-hover' style={{ userSelect: 'none', lineHeight: "100px", fontSize: 22, width: "120px", height: "120px", borderRadius: "50%", background: "#4F607C", boxShadow: "1px 0 20px 8px #555", color: "white" }}>Soil</div>
                                <div onClick={inc} className='p-2 m-0 text-center align-items-center on-hover' style={{ userSelect: 'none', lineHeight: "100px", fontSize: 22, width: "120px", height: "120px", borderRadius: "50%", background: "#4F607C", boxShadow: "1px 0 20px 8px #555", color: "white" }}>Fertiliser</div>
                            </div>
                            <div className='col-2'></div>
                            <div className='col-8 justify-content-around d-flex row' style={{ height: '400px' }}>
                                <div className='col-12 justify-content-around d-flex row'>
                                    <img src={`${matArr.includes("straw") ? straw : elephant}`} alt="" className='col-4' style={{ height: "300px", objectFit: "contain", transition: "1s", transform: `scale(${i / 300})` }} />
                                    <img src={`${matArr.includes("mycilium") ? mycilium : cork}`} alt="" className='col-4' style={{ height: "300px", objectFit: "contain", transition: "1s", transform: `scale(${j / 300})` }} />
                                    <img src={`${matArr.includes("hemp") ? hemp : bamboo}`} alt="" className='col-4' style={{ height: "300px", objectFit: "contain", transition: "1s", transform: `scale(${k / 300})` }} />
                                </div>
                                <div className='col-12 justify-content-around d-flex row'>
                                    <h2 className='col-4 text-center text-dark'>{`${matArr.includes("straw") ? "Straw" : "Elephant grass"}`}</h2>
                                    <h2 className='col-4 text-center text-dark'>{`${matArr.includes("mycilium") ? "Mycilium" : "Cork"}`}</h2>
                                    <h2 className='col-4 text-center text-dark'>{`${matArr.includes("hemp") ? "Hemp" : "Bamboo"}`}</h2>
                                </div>
                                <div className='d-flex w-100 justify-content-around'>
                                    <div style={{ width: '15%', height: '20px' }} className='position-relative rounded-pill bg-info p-0'>
                                        <div style={{ width: `${i / 3}%`, height: `20px`, left: 0, bottom: 0, backgroundColor: "#4F607C" }} className='position-absolute rounded-pill align-bottom p-0'>
                                        </div>
                                    </div>
                                    <div style={{ width: '15%', height: '20px' }} className='position-relative rounded-pill bg-info p-0'>
                                        <div style={{ width: `${j / 3}%`, height: `20px`, left: 0, bottom: 0, backgroundColor: "#4F607C" }} className='position-absolute rounded-pill align-bottom p-0'>
                                        </div>
                                    </div>
                                    <div style={{ width: '15%', height: '20px' }} className='position-relative rounded-pill bg-info p-0'>
                                        <div style={{ width: `${k / 3}%`, height: `20px`, left: 0, bottom: 0, backgroundColor: "#4F607C" }} className='position-absolute rounded-pill align-bottom p-0'>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-5 mx-auto position-absolute' style={{ top: "20vh", left: "10%" }}>
                            <div className='d-flex flex-column mt-5 pt-5 h-100 justify-content-end'>
                                <div className='p-3 w-50 pb-4 bg-light rounded' style={{
                                    opacity: "80%",
                                    marginLeft: "5%", marginBottom: "-30px", boxShadow: "1px 1px 30px 8px"
                                }}>
                                    Did you know it takes the cork 10-15 years to grow? So make sure you press the buttons enough.
                                </div>
                                <img className='w-75' src={an1} style={{ height: '200px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="9" title="Proccess">
                        {/* <Player className="position-absolute" style={{ position: "absolute !important", top: "-100%", left: 0 }} src={an} />
                        <div className='position relative bg-danger'>
                            arya
                        </div> */}
                    </Tab>
                    <Tab eventKey="10" title="Game">
                        <Game materials={matArr} />
                    </Tab>


                </Tabs>

            </div>
        </>
    )
}

export default HomeScreen