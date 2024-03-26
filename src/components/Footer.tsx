import React from "react";
import '../../src/App.css';


interface menuprop{
  setMenu?:any
}
const Footer = (props:menuprop) => {
  return (
    <>
    <div className="hrLine"></div>
    <div className=" textMargin mt-[10px] ">
      <div className="mr-[10px] footerHeight">
        <img
          className="w-52 h-8 mt-3"
          src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg"
          alt=""
        />
        <div className="flex  pt-[1rem] ">
          <div className="mr-[3rem] footerCol">
            <h1 className=" footerTitle font-bold text-sm">NEWS</h1>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("home")}>Home Page</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("World")}>World</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Coronavirus")}>Coronavirus</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("News")}>U.S. News</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Politics")}>U.S. Politics</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("New York")}>New York</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Business")}>Business</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Tech")}>Tech</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Science")}>Science</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Sports")}>Sports</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Wildfire")}>Wildfire Tracker</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Obituaries")}>Obituaries</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Today's Paper")}>Today's Paper</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Trending")}>Trending</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Corrections")}>Corrections</p>
          </div>

          <div className="mr-[3rem] footerCol">
            <h1 className="footerTitle font-bold text-sm">OPINION</h1>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Today's Opinion")}>Today's Opinion</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Columnists")}>Columnists</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Editorials")}>Editorials</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Essays")}>Guest Essays</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Letters")}>Letters</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Sunday")}>Sunday Opinion</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Opinion")}>Opinion Video</p>
          </div>
          <div className="mr-[3rem] footerCol">
            <h1 className="footerTitle font-bold text-sm">ARTS</h1>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Arts")}>Today's Arts</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Art & Design")}>Art & Design</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Books")}>Books</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Best Sellers")}>Best Sellers Book List</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Dance")}>Dance</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Movies")}>Movies</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Music")}>Music</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Pop")}>Pop Culture</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Television")}>Television</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Theater")}>Theater</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Video")}>Video: Arts</p>
          </div>
          <div className="mr-[3rem] footerCol">
            <h1 className="footerTitle font-bold text-sm">LIVING</h1>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Automotive")}>Automotive</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Games")}>Games</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Education")}>Education</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Food")}>Food</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Health")}>Health</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Jobs")}>Jobs</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Love")}>Love</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Magazine")}>Magazine</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Parenting")}>Parenting</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Estate")}>Real Estate</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Style")}>Style</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Magazine")}>T Magazine</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Travel")}>Travel</p>
          </div>
          <div className="mr-[3rem] footerCol">
            <h1 className="footerTitle font-bold text-sm">MORE</h1>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Reader")}>Reader Center</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Athletic")}>The Athletic</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Wirecutter")}>Wirecutter</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Cooking")}>Cooking</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Headway")}>Headway</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Live")}>Live Events</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Learning")}>The Learning Network</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Podcasts")}>Podcasts</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Video")}>Video</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Graphics")}>Graphics</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("TimesMachine")}>TimesMachine</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Times")}>Times Store</p>
            <p className="footerText cursor-pointer" >Manage My Account</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("Gift")}>Gift Articles</p>
            <p className="footerText cursor-pointer" onClick={()=>props.setMenu("NYTLicensing")}>NYTLicensing</p>
          </div>
          </div>
          <div className="footerSide">
            <div className="mr-[3rem] footerSideContent  pt-[1rem]">
              <h1 className="footerSideBar">SUBSCRIBE</h1>
              <div className="flex mb-[5px]">
                <img src="data:image/png;base64,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" alt="" />
                <h1  className="footerSideBarText">Home Delivery</h1>
              </div>
              <div className="flex mb-[5px]">
                <img src="data:image/png;base64,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" alt="" />
                <h1 className="footerSideBarText">Digital Subscriptions</h1>
              </div>
              <div className="flex mb-[5px]">
                <img src="https://static01.nyt.com/images/2020/03/23/crosswords/crossword-logo-nytgames-hires/crossword-logo-nytgames-hires-thumbLarge-v4.png" alt="" />
                <h1 className="footerSideBarText">Games</h1>
              </div>
              <div className="flex mb-[5px]">
                <img src="data:image/png;base64,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" alt="" />
                <h1 className="footerSideBarText">Cooking</h1>
              </div>
            
            </div>
            <div className="flex flex-col">
              <div className="descriptionSideBar ">
                <p>Email Newsletters</p>
                <p>Corporate Subscriptions</p>
                <p >Education Rate</p>
              </div>
            <div className="descriptionSideBar bottomSidebar borderbottom">
              <p>Mobile Applications</p>
              <p>Replica Edition</p>
              <p>International</p>
              <p>Canada</p>
              <p>Español</p>
              <p>中文网</p>
            </div>
            </div>


          
        </div>
      </div>
    </div>
    <div className="  footerEnd borderbottom flex mt-3 text-xs text-center">
        <h1 className="mb-[35px] ml-[2rem]">
          © 2024 The New York Times Company </h1>
          <h1 className="pl-[10px] ">NYTCo</h1>
           <h1 className="pl-[10px]">Contact Us</h1>
            <h1 className="pl-[10px]">Accessibility</h1> 
            <h1 className="pl-[10px]">Work with us</h1>
            <h1 className="pl-[10px]">Advertise</h1>
            <h1 className="pl-[10px]">T Brand Studio</h1>  
            <h1 className="pl-[10px]">Your Ad Choices</h1> 
            <h1 className="pl-[10px]">Privacy Policy</h1> 
            <h1 className="pl-[10px]">Terms of Service</h1>
            <h1 className="pl-[10px]">Terms of Sale</h1> 
            <h1 className="pl-[10px]">Site Map</h1>
            <h1 className="pl-[10px]">Help</h1>
            <h1 className="pl-[10px]">Subscriptions</h1>
        
        </div>
    </>
  );
};

export default Footer;
