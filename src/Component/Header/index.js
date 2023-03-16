import LeaftHeader from "../LeftHeader"
import RightHeader from "../RightHeader"
import "./index.css"


const Header = ()=>{
    return<>
    <div className="header">
        <nav>
        <LeaftHeader/>
        <RightHeader/>
        </nav>
    </div>
        
        </>
}

export default Header 