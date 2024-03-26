import Books from "../component/Books";
import Hero from "../component/Hero";




const Home = ({blogs}) => {
    return (
        <div className="mx-20 mt-12">
            
            <div>
            <Hero></Hero>
            </div>

            <div className="mt-12">
                <Books blogs={blogs}></Books>
            </div>

            
        </div>
        
    );
};

export default Home;