import SidebarSupport from "../../components/SidebarSupport";
import PostList from "../../components/PostList";

const SupportLiving=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>주거 관련 사이트</h1>
            </div>
             
           <SidebarSupport  />
           <PostList/>
        </div>
    );
};

export default SupportLiving;