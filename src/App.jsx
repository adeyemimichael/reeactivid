
import ReactPlayer from "react-player/youtube";

const App = () => {
 
 
 
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
  <div className="w-screen h-screen flex justify-center items-center flex-col">
<div className="flex md:flex-row justify-between  items-center w-screen">
  <h2 className="text-6xl text-start font-medium p-6 m-6">Reeactivid</h2>
  
  <ul className="flex flex-col md:flex-row md:justify-between items-center md:p-6 m-6">
    <li className="text-white rounded-full hover:bg-black transition-opacity m-2 p-4 text-[020px] bg-[#0D6D8C]"><a href="https://github.com/reeactivid/reeactivid.github.io">Github</a></li>
    <li className="text-white rounded-full hover:bg-black transition-opacity m-2 p-4 text-[20px] bg-[#0D6D8C]"><a href="https://twitter.com/reeactivid">Twitter</a></li>
    <li className="text-white rounded-full hover:bg-black transition-opacity m-2  p-4 text-[20px] bg-[#0D6D8C]"><a href="https://www.linkedin.com/company/reeactivid/">Linkedin</a></li>
    <li className="text-white rounded-full hover:bg-black transition-opacity m-2 p-4 text-[20px] bg-[#0D6D8C]"><a href="https://www.instagram.com/reeactivid/">Instagram</a></li>
    <li className="text-white rounded-full hover:bg-black transition-opacity m-2 p-4 text-[20px] bg-[#0D6D8C]"><a href="https://www.youtube.com/channel/UC0219-z21026-069">Youtube</a></li>
  </ul>

</div>
    <div className=" w-screen h-screen flex justify-center items-center flex-col p-10">
    <ReactPlayer url='https://youtu.be/jlTrwdrzTTk?si=wtNtfC5tu9_nin4c'   
    volume={0.5}
    playing={false}
    controls={true}
    width="100%"
    height="100%"
    />
    </div>
    <div> 
      <button >Caspian Tern 1</button> 
      <button >Caspian Tern 2</button> 
    </div> 
    </div>
  );
};

export default App;