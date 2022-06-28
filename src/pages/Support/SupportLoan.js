import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";

const SupportLoan=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>대출 관련 지원책</h1>
            </div>
            
           <SidebarSupport />
           <PostList />
        </div>
    );
};

export default SupportLoan;