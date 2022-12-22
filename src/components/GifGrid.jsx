import { Gifitem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
const { images,isLoading} = useFetchGifs(category);
console.log({images,isLoading});

/*
    const [images,setImages] = useState([]);
    const [isLoading,setLoading] = useState (true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect( () => {
        getImages();
    },[ ] )
  */
 
    return(
        <>
        <h3>{category}</h3>
        {
            //isLoading ? 
           // (<h4 className>...cargando</h4>) 
           // : null

         isLoading && (<h4>...cargando</h4>) 
        }
        
        <div className="card-grid">
          {images.map ( (image) => (
                 <Gifitem key ={image.id} {...image}></Gifitem>
               ))
           }
        </div>
        </>
    )
}