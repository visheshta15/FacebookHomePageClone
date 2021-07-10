import React from 'react'
import './Widgets.css';


function Widgets() {
    return (
        <div className="widgets">
        {/* An inline frame is used to embed another document within the current HTML document. */}
       

        <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340" 
        height="1000" 
        title="iframe"
        style={{ border:"none" ,overflow: "hidden" }}  
        scrolling="no" 
        frameborder="0" allowfullscreen="true" 
        allow="encrypted-media"
        allowTransparency="true"

        ></iframe>
        </div>
    )
}

export default Widgets
