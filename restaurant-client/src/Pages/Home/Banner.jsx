import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sliderImage1 from '../../assets/home/01.jpg'
import sliderImage2 from '../../assets/home/02.jpg'
import sliderImage3 from '../../assets/home/03.png'
import sliderImage4 from '../../assets/home/04.jpg'
import sliderImage5 from '../../assets/home/05.png'
import sliderImage6 from '../../assets/home/06.png'
function Banner() {
  return (
    <>

      <Carousel>
        <div>
          <img src={sliderImage1} />
          
        </div>
        <div>
          <img src={sliderImage2} />
         
        </div>
        <div>
          <img src={sliderImage3} />
         
        </div>
        <div>
          <img src={sliderImage4} />
         
        </div>
        <div>
          <img src={sliderImage5} />
         
        </div>
        <div>
          <img src={sliderImage6} />
         
        </div>
      </Carousel>
    </>
  );
}

export default Banner;
