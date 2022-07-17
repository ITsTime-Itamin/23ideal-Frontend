import "./Categories.css";
import styled from "styled-components";



export const Select = styled.select`
	margin: 0;
	min-width: 0;
	display: block;
	width: 50%;
	padding: 8px 8px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 25px;
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



const Categories = () => {
    return (
        <div className="categoryBox">
            <div className="default">서울 특별시 </div>
            <div className="categoryItem"> 
                    <Select>
                        <option key="gangNamGu" value="강남구" >강남구</option>
                        <option key="gangDongGu" value="강동구">강동구</option>
                        <option key="gangBukGu" value="강북구">강북구</option>
                        <option key="gangSeoGu" value="강서구">강서구</option>
                        <option key="gwanAkGu" value="관악구">강동구</option>
                        <option key="gwangJinGu" value="광진구">광진구</option>
                        <option key="guRoGu" value="구로구">구로구</option>
                        <option key="geumCheonGu" value="금천구">금천구</option>
                        <option key="noWonGu" value="노원구">노원구</option>
                        <option key="doBongGu" value="도봉구">도봉구</option>
                        <option key="dongDaeMun" value="동대문구">동대문구</option>
                        <option key="dongJakGu" value="동작구">동작구</option>
                        <option key="maPoGu" value="마포구">마포구</option>
                        <option key="seoDaeMunGu" value="서대문구">서대문구</option>
                        <option key="seoChoGu" value="서초구">서초구</option>
                        <option key="seongDongGu" value="성동구">성동구</option>
                        <option key="seongBukGu" value="성북구">성북구</option>
                        <option key="songPaGu" value="송파구">송파구</option>
                        <option key="yangCheonGu" value="양천구">양천구</option>
                        <option key="yeongDeungPoGu" value="영등포구">영등포구</option>
                        <option key="yongSanGu" value="용산구">용산구</option>
                        <option key="eunPyeongGu" value="은평구">은평구</option>
                        <option key="jongNoGu" value="종로구">종로구</option>
                        <option key="jungGu" value="중구">중구</option>
                        <option key="jungNangGu" value="중랑구">중랑구</option>
                       
                    </Select>
            </div>
        </div>
        
    )
};

/*function CategoryItem () {
    return <Categories option={OPTIONS} defaultVaule="gangNamGU"></Categories>;
}*/

export default Categories;

/*const Categories_List = const Product_Data [
    {id : 'gangNamGu',
    value : '강남구'},
    {id : 'gangDongGu',
    value : '강동구'},
    {id : 'gangBukGu',
    value : '강북구'},
    {id : 'gangSeoGu',
    value : '강서구'},
    {id : 'gwanAkGu',
    value : '관악구'},
    {id : 'gwangJinGu',
    value : '광진구'},
    {id : 'guRoGu',
    value: '구로구'},
];

const Category = [
    <div className="category">

    </div>
]

const Categories = () => {
    <div className='categoriesBox'>
        {categories.map(c=>( <Category key={c.name}>{c.text}</Category>))}
    </div>
};

export default Categories;*/
