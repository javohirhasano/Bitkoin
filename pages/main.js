import Header from "../Container/Header"
import MainWrapper from "../Container/index/MainIndexWrapper"
import { useSelector } from "react-redux"
import { Button } from "@material-ui/core"
import Link from 'next/link'

const About = () => {
    const isSidebarshow = useSelector(state => state.isSidebarshow)
    return (

        <MainWrapper>
            <div className="d-flex">
                <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
                    <h1>Menu</h1>
                    <div className="m-4">
                        <Button><Link className="barlink" href="/main"><a className="barlink text-white">About</a></Link></Button>
                        <Button><Link className="barlink" href="/user"><a className="barlink text-white">Home</a></Link></Button>
                        <Button><Link className="barlink" href="main"><a className="barlink text-white">Photos</a></Link></Button>
                        <Button><Link className="barlink" href="main"><a className="barlink text-white">Posts</a></Link></Button>
                        <Button><Link className="barlink" href="main"><a className="barlink text-white">Contact</a></Link></Button>

                    </div>
                </div>
                <div className="contain">
                    <Header></Header>
                    <div>
                        <h1>About</h1>
                    </div>

                </div>
            </div>
        </MainWrapper>


    )
}
export default About