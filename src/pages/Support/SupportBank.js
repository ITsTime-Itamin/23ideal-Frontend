import SidebarSupport from "../../components/SidebarSupport";
import PostList from "../../components/PostList";

const SupportBank=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>은행별 대출서비스</h1>
            </div>
            
           <SidebarSupport  />
           <PostList/>
        </div>
    );
};

export default SupportBank;