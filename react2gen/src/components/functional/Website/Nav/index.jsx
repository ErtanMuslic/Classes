import style from "./nav.module.css"

const Nav = (props) =>{
    return <div className={style.nav}>
            <p>Tailblocks</p>
            <div className={style.nav2}>
            <p>First Link</p>
            <p>Second Link</p>
            <p>Third Link</p>
            <p>Fourth Link</p>
            </div>
        </div>

}

export default Nav;