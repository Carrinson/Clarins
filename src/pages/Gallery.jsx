import Bestsellers from "./Bestsellers"
import Face from "./Face/Face"
function Gallery(){

    return(
        <>

            <div className="gallery">
                <h1 className="gall-header">Gallery</h1>
                <div className="gall-container">
                    <img src="src/gallery/gallery_1.jpg" alt="" className="gallery-images1" />
                    <img src="src/gallery/gallery_4.png" alt="" className="gallery-images4" />
                    <img src="src/gallery/gallery_2.png" alt="" className="gallery-images2" />
                    <div className="agroup">
                    <img src="src/gallery/gallety_5.jpg" alt="" className="gallery-images5" />
                    <img src="src/gallery/gallery_7.jpg" alt="" className="gallery-images7" />
                    </div>


                </div>

            </div>
        </>

    )
}
export default Gallery