import { useParams } from "react-router-dom";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";


const CategoryPage = () => {
    const params = useParams();

 
    return (
         <main>
            <CategoryComponent category={params.category} />
        </main>
    );
}

export default CategoryPage;
