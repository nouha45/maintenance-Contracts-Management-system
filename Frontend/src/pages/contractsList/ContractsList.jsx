import "../equipmentList/equipmentList.css"
import React, {useState, useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link, useNavigate, useParams} from 'react-router-dom'
import ContractService from '../../services/ContractService'
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
  const {numSerie}=useParams()
  const [contracts, setContracts] = useState([])
  useEffect(() => {

    getContracts();
}, [])

const getContracts = () => {
  ContractService.getContractsByEquipement(numSerie).then((response) => {
    setContracts(response.data)
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

  const deleteContract = async (marche) =>{
    

    ContractService.deleteContract(marche).then((response) => {
      
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
   <Link to={"/addContract/"+ numSerie}> <button className="add"><span>Ajouter </span></button></Link>
    <TableContainer component={Paper} id ="table" className={classes.tableContainer}>
      <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Informations generales</TableCell>
            <TableCell className={classes.tableHeaderCell}>Details</TableCell>
            <TableCell className={classes.tableHeaderCell}> Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((row) => (
            <TableRow key={row.marche }>
              <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.marche}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.equipement_num_serie}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.prestataire}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.intervenant}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.action}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.commentaire}</Typography>
                </TableCell>
              <TableCell>{row.date_intervention}</TableCell>
              <TableCell>
                  <Typography >
                  <Link to={"/editContract/"+row.marche }>
              <button className="ButtonequipementList">Edit</button></Link>
                                        
        <button className = "ButtonequipementDelete" 
        onClick = {() => {deleteContract(row.marche);
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
            count={contracts.length}
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
