import React from 'react'
import './StoryReel.css';
import Story from './Story';
import { useStateValue } from './StateProvider';

function StoryReel() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story className="storyReel__story"
                // image="https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/46061917_106015403747017_4636035132921217024_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=v8EL5DuovI0AX_7Lh-l&_nc_ht=scontent.fknu1-2.fna&oh=1f82b2b073151515217b032df74b6841&oe=60CD89E3"
                image={user.photoURL}
                bgImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/love-and-care-my-city-royalty-free-image-1616634469."
                // title="Visheshta Kushwaha"
                title={user.displayName}
            />
            <Story className="storyReel__story" 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/330px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
                bgImage="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
                title="Elon Reeve Musk"
            />
            <Story className="storyReel__story" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtexgsNdyOjxfLIK0_iJ-u7s8NskA4Ie4NbNYp0VO9JWQAeCjlsAQyxmSVUPToLFsEk10&usqp=CAU"
                bgImage="https://www.todaysparent.com/wp-content/uploads/2017/01/5-fun-indoor-games-for-kids-1.jpg"
                title="Mark Zuckerberg"
            />
            <Story className="storyReel__story" 
                image="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg?v=25"
                bgImage="https://smeloans.co.uk/assets/media-library/images/hero-test-3-1000.jpg"
                title="Bill Gates"
            />
            <Story className="storyReel__story" 
                image="https://www.wallpapertip.com/wmimgs/158-1588150_famous-personalities-of-football.jpg"
                bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQg8oagEZ240DvRzeA9mxVs_pfJefdSz_vg&usqp=CAU"
                title="Christian Ronado"
            />
        </div>
    )
}

export default StoryReel
