import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar" >
            <SidebarRow 
            // src="https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/46061917_106015403747017_4636035132921217024_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=v8EL5DuovI0AX_7Lh-l&_nc_ht=scontent.fknu1-2.fna&oh=1f82b2b073151515217b032df74b6841&oe=60CD89E3"
            // title="Vishesta Kushwaha" 
            
            src={user.photoURL}    
            title={user.displayName}
            />
            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
            title="COVID-19 Information Center" />
            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            title="Friends" />
            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            title="Groups" />
            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            title="Marketplace" />

            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
            title="Pages" />

            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
            title="Events" />

            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
            title="Messenger" />
            <SidebarRow 
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
            title="Weather" />
            <SidebarRow 
            Icon={ExpandMoreIcon}
            title="More" />


        </div>
    )
}

export default Sidebar;
