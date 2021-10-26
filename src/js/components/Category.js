import '../../css/Category.css';
import { useParams } from 'react-router-dom';

function Category() {
  let { categoryId } = useParams();
  return (
    <div className="Category">
      Category Page.
      <p>{categoryId}</p>
    </div>
  );

  // TODO
  // Switch statement to determine which data to enumerate.
  // 
}

export default Category;
