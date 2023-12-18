import React, { useContext, useEffect } from 'react'
import "./listList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/apiCalls';

const ListList = () => {

    const { lists, dispatch } = useContext(ListContext);

    useEffect(() => {
        getLists(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {

         deleteList(id, dispatch);
    };


    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'genre', headerName: 'Genre', width: 250 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to= {"/list/" + params.row._id} state={{list: params.row}} >
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteIcon className='productListDelete' onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }

    ];


    return (
        <div className='productList'>
            <DataGrid
                rows={lists}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={r => r._id}
            />
        </div>
    )
}

export default ListList