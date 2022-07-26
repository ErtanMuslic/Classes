import { useState } from 'react';
import style from './tab.module.css';

// const Tab = (props) => {
//     const {onChange,tabsList} = props;
//     const [selected,setSelected] = useState(0);

//     const handleChange = (index) => {
//         setSelected(index)
//         if(onChange()){
//             onChange(index);
//         }

//     }

    // return <div className={style.tabsContainer}>
    //     {tabsList.lenght > 0 && tabsList.map((item) => {
    //         return 
    //     })}
    //     <div className={`${style.tabItem} ${selected === 0 ? style.active: ""}`} onClick={() => handleChange(0)}> <p>Item Tile 1</p> </div>
    //     <div className={`${style.tabItem} ${selected === 1 ? style.active: ""}`} onClick={() => handleChange(1)}> <p>Item Tile 2</p> </div>
    //     <div className={`${style.tabItem} ${selected === 2 ? style.active: ""}`} onClick={() => handleChange(2)}> <p>Item Tile 3</p> </div> 
              
    // </div>
// };

// export default Tab;