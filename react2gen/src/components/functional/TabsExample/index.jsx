import Tab from '../Tab';

const TabsExample = (props) => {
    const [selectedTab,setSelectedTab] = useState("");
    const array = ["item 1","item 2","item 3"];
    return <div>
        <Tab onChange={(index) => selectedTab(index)}/>
        {selectedTab() && <p></p>}
        {selectedTab() && <p></p>}
        {selectedTab() && <p></p>}
    </div>
}
export default TabsExample;