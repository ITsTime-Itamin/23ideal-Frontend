import "./Categories.css";
import styled from "styled-components";

const Categories =  ({setState})  => {

    const area=["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
    const change=(value)=>{
        if(value=="강남구"){
            setState({center: { lat: 37.4959854, lng: 127.0664091 },isPanto: true, zoom:16})
        }
        else if(value=="강동구"){
            setState({center: { lat: 37.5492077, lng: 127.1464824 },isPanto: true, zoom:16})
        }
        else if(value=="강북구"){
            setState({center: { lat: 37.6469954, lng: 127.0147158 },isPanto: true, zoom:16})
        }
        else if(value=="강서구"){
            setState({center: { lat:37.5657617, lng: 126.8226561 },isPanto: true, zoom:16})
        }
        else if(value=="관악구"){
            setState({center: { lat: 37.4603732, lng: 126.9536086},isPanto: true, zoom:16})
        }
        else if(value=="광진구"){
            setState({center: { lat: 37.5574120, lng: 127.0796211 },isPanto: true, zoom:16})
        }
        else if(value=="구로구"){
            setState({center: { lat: 37.4954856, lng:  126.858121 },isPanto: true, zoom:16})
        }
        else if(value=="금천구"){
            setState({center: { lat: 37.4600969, lng: 126.9001546},isPanto: true, zoom:16})
        }
        else if(value=="노원구"){
            setState({center: { lat: 37.6377533, lng: 127.0754623},isPanto: true, zoom:16})
        }
        else if(value=="도봉구"){
            setState({center: { lat:37.6658609, lng: 127.0317674},isPanto: true, zoom:16})
        }
        else if(value=="동대문구"){
            setState({center: { lat: 37.5838012, lng: 127.0507003},isPanto: true, zoom:16})
        }
        else if(value=="동작구"){
            setState({center: { lat:37.4965037, lng:126.9443073},isPanto: true, zoom:16})
        }
        else if(value=="마포구"){
            setState({center: { lat:37.5676507, lng: 126.8854549},isPanto: true, zoom:16})
        }
        else if(value=="서대문구"){
            setState({center: { lat: 37.5820369, lng:126.9356665},isPanto: true, zoom:16})
        }
        else if(value=="서초구"){
            setState({center: { lat:37.4769528, lng:127.0378103},isPanto: true, zoom:16})
        }
        else if(value=="성동구"){
            setState({center: { lat:37.5506753, lng:127.0409622},isPanto: true, zoom:16})
        }
        else if(value=="성북구"){
            setState({center: { lat:37.606991, lng:127.0232185},isPanto: true, zoom:16})
        }
        else if(value=="송파구"){
            setState({center: { lat: 37.5177941, lng:127.1127078},isPanto: true, zoom:16})
        }
        else if(value=="양천구"){
            setState({center: { lat:37.5270616, lng:126.8561534},isPanto: true, zoom:16})
        }
        else if(value=="영등포구"){
            setState({center: { lat:37.520641, lng:126.9139242},isPanto: true, zoom:16})
        }
        else if(value=="용산구"){
            setState({center: { lat:37.5311008, lng:126.9810742},isPanto: true, zoom:16})
        }
        else if(value=="은평구"){
            setState({center: { lat:37.6176125, lng:126.9227004},isPanto: true, zoom:16})
        }
        else if(value=="종로구"){
            setState({center: { lat:37.5990998, lng:126.9861493},isPanto: true, zoom:16})
        }
        else if(value=="중구"){
            setState({center: { lat:37.5579452, lng:126.9941904},isPanto: true, zoom:16})
        }
        else if(value=="중랑구"){
            setState({center: { lat:37.598031, lng:127.092931},isPanto: true, zoom:16})
        }
        else {
            setState({center: { lat:37.554722, lng:126.970833},isPanto: true, zoom:12})
        }
    }

    return (
        <div className="categoryBox">
            <div className="default">서울 특별시 </div>
            <div className="categoryItem"> 
                    <Select onChange={(e)=>{change(e.target.value)}}>
                        <option>선택</option>
                        {area.map((i)=>{ return (<option value={i}>{i}</option>)})}
                    </Select>
            </div>
        </div>
    )
};

export const Select = styled.select`
	margin: 0;
	min-width: 0;
	display: block;
	width: 50%;
	padding: 8px 8px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
	line-height: inherit;
    border-color : white;
    border-color : rgba( 0, 0, 0, 0 );
	border-radius: 4px;
	color: inherit;
    flexdirection: row;
    background-color: #ffffff;
    background-color: rgba( 0, 0, 0, 0 );

`;

const SelectBoxWrapper = styled.div`
	display: flex;
`;

export default Categories;
