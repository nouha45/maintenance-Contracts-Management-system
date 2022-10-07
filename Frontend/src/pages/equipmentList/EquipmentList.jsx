import "./equipmentList.css"
import React, {useState, useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link, useNavigate} from 'react-router-dom'
import EquipementService from '../../services/EquipementService'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,

    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1100
        
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));


  let USERS = []
  



function MTable() {
  const history = useNavigate();
  const [equipements, setEquipements] = useState([])
  useEffect(() => {

    getEquipements();
}, [])

const getEquipements = () => {
  EquipementService.getEquipements().then((response) => {
    setEquipements(response.data)
      console.log(response.data);
    
  }).catch(error =>{
      console.log(error);
  })
}
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteEquipement = async (num_serie) =>{
    

  EquipementService.deleteEquipement(num_serie).then((response) => {
    history('/equipmentList')
}).catch(error => {
    console.log(error)
})
  
   
  }

  return (
    <div className="App">
    <Topbar/>
   <div className="container">
    
    
    <Sidebar/>
  <div className="equipmentlist">
   <Link to={"/addEquipement/"}> <button className="add"><span>Ajouter </span></button></Link>
    <TableContainer component={Paper} id ="table" className={classes.tableContainer}>
      <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Informations generales</TableCell>
            <TableCell className={classes.tableHeaderCell}>Details</TableCell>
            <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipements.map((row) => (
            <TableRow key={row.num_serie }>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.nom} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.nom}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.num_serie}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.designation}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.marque}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.madele}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.details}</Typography>
                </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                  <Typography >
                  <Link to={"/equipementDetails/"+row.num_serie }>
              <button className="ButtonequipementList">See More</button></Link>
                                        
        <button   className = "ButtonequipementDelete" onClick = {() => {deleteEquipement(row.num_serie);
        window.location.reload();
          }}
          
        style = {{marginLeft:"10px"}}> Delete</button>
                   </Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={equipements.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  );
}

export default MTable;
