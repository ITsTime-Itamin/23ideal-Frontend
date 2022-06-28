import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";

const SupportGov=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <SidebarSupport/>
            <PostList/>
        </div>
    );
};

export default SupportGov;