
import './Hero.css';
import heroImage from '../../assets/image.png';
const Hero = () => {
  return (
    <div className="container">
        <div className="image">
        <img src={heroImage} alt="Description" />
      </div>
      <div className="text">
        <h1 className="prompt-text">JOSHUA KANATT</h1>
        <p>
        Founder & Chief Executive Officer - GAMERS TAG<br></br><br></br></p>
        <p>
        Senior Product Architect & Business Analyst | Deakin GMBA | Stanford SSP Entrepreneur | Graduated from IIITB, IMTG, LJMU, HICET, Karunya | Product Growth & Marketing Strategist | Data & Risk Analyst<br></br>
        </p><br></br>
       
        <p className="poppins-text">
        I'm a visionary entrepreneur with over four years of expertise in Product management, architecture, Marketing, Data analytics, Business development & Consulting, and Startups. Designed over 100 world-class products, setting new industry standards. With unique talent for forecasting product growth, validated by extensive customer persona analysis. As an entrepreneur by heart, I bring a competitive mindset to product ownership,
assuring highest performance and innovation with mindset of 5x growth. Have a vision to forecast the product. My expertise of numerous business models in multiple industries, refined by my experience.
        </p>
        <br></br>
    <p>"The journey of a thousand miles begins with a single innovative step." <br></br>- Joshua Kanatt</p>
      </div>
      
    </div>
  );
};

export default Hero;