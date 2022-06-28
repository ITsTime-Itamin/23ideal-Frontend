import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";


const Support=()=>{
    return(
        <div style={{textAlign:"center"}}>
           <SidebarSupport/>
           <PostList />
        </div>
    );
    
};

export default Support;