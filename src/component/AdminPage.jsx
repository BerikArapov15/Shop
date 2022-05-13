import { Input } from '@mui/icons-material';
import React, {  useState } from 'react';
import { Button } from 'react-bootstrap';

const AdminPage = () => {
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    function addProduct(){
        let newObj= {
            img,
            title,
            price
        }
    }

    return (
        <div>
            <div>
                <input onChange={(e)=> setImg(e.target.value)} value={img} type='text' placeholder='image'/>
                <input onChange={(e)=> setTitle(e.target.value)} value={title} type='text' placeholder='title'/>
                <input onChange={(e)=> setPrice(e.target.value)} value={price} type='text'  placeholder='price'/>
                <Button onClick={()=> addProduct()}>Add Product</Button>
            </div>
        </div>
    );
};

export default AdminPage;