import { Stack } from "@mui/material";
import {categories} from "../utils/constants";

// const selectedCategory = 'New'
const Sidebar = ({selectedCategory,setselectedCategory}) => (
    <Stack direction="row" 
    sx={{overflowY:"auto", height:{sx:'auto',md:'95%'}, flexDirection:{md:'column'}, marginRight:'0.5rem'}}>
    {categories.map((category,idx) => (
        <button key={idx} className="category-btn" style={{background: category.name === selectedCategory && '#FC1503', color:'white'}}
        onClick={() => setselectedCategory(category.name)} >
            <span style={{color: category.name === selectedCategory?'#white':'red', marginRight:'1rem'}}>{category.icon}</span>
            <span style={{opacity: category.name === selectedCategory?'1':'0.5'}}>{category.name}</span>
        </button>
    ))}
    </Stack>
  )

export default Sidebar