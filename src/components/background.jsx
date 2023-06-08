import Bars from '../assets/bars.png'
const Background = () => {
    return (
        <section className = "background-section">

          <img src={Bars}  alt="lines" className = "up-bars"/>
          <img src={Bars}  alt="lines" className = "bottom-bars"/>
            
        </section>
    )
}

export default Background