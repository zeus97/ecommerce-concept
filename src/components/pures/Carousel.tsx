import '../../styles/Carousel.scss'

//images
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'

function Carousel() {
  return (
    <div id="carousel-example" className="carousel slide container-md mt-2" data-bs-ride="carousel" data-bs-theme="dark" data-bs-touch="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 carousel-img" alt="shoes"  />
        </div>

        <div className="carousel-item">
          <img src={image2} className="d-block w-100 carousel-img" alt="shirt"  />
        </div>

        <div className="carousel-item">
          <img src={image3} className="d-block w-100 carousel-img" alt="asda" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel-example" data-bs-slide="prev">
        <span className="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel-example" data-bs-slide="next">
        <span className="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel