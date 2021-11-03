// import './index.css';
// import React, { useEffect } from "react";
import Switch from '@material-ui/core/Switch';
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     // "& > *": {
//     //   margin: theme.spacing(1),
//     // },
//   },
// }));



//main Function
 const  ListOfAdmins = () => {
  // const classes = useStyles();
  
    //Toggle button--------
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };---------
  const history = useHistory();


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
  //column 1
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    //column 2
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    //column 3
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    //column 4
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
  
    //column 5
    {
      field: "View Details",
      headerName: "View",
      sortable: false,
      width: 170,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        
        const handleClick = () => {
          history.push('/details');
          // const api: GridApi = params.api;
          // const fields = api
          //   .getAllColumns()
          //   .map((c) => c.field)
          //   .filter((c) => c !== "__check__" && !!c);
          // const thisRow: Record<string, GridCellValue> = {};
  
          // fields.forEach((f) => {
          //   thisRow[f] = params.getValue(f);
          // });
  
          // return alert(JSON.stringify(thisRow, null, 4));
          // return (<a href="/details"></a>);
        };
        const handleSave = () => {
          alert("saved");
        };
  
        return (
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              onClick={handleClick}
              // orientation="vertical"
              color="primary"
              variant="contained"
            >
              Details
            </Button>
  
            <Button
              onClick={handleSave}
              // orientation="vertical"
              color="primary"
              variant="contained"
            >
              Save
            </Button>
  
            
          </ButtonGroup>
          
        );
        
      },
      
    },
  
  //column 6  
  {
    field: "response",
      headerName: "Block/Approve",
      sortable: false,
      width: 170,
      disableClickEventBubbling: true,
       
      renderCell: (params) => { 
      
        return (
          <div style={{
            
            justifyContent: "center",
          }}>
           
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            
          </div>
        );
      }
  
    }
  ];
  
  //rows
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  

  return (
    <div
    style={{
      height: 800,
      justifyContent: "flex-end",
    }}>
    
      <DataGrid
        rows={(rows)}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ListOfAdmins;