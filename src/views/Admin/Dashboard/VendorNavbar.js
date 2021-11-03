import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";


//Buttons
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
//Accordian
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import AddAdmin from './AddAdmin';
import ListOfAdmins from './ListOfAdmins'

import {
  // BrowserRouter as Router,
  
  Switch,
  Route,
  Link,
  useRouteMatch,
  
} from "react-router-dom";
import VendorRegForm from "./Form";

////Drawer
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  /////Accordian
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  //-----------------//

  //Drawer or menu
  // root: {
    
  // },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  //Button
  button: {
    margin: theme.spacing(1),
  },
}));

export default function VendorComp() {
  const classes = useStyles();
  let match = useRouteMatch();

  return (
    <div className={classes.root}  style={{flexDirection:"column"}}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            Vendor Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h2 style={{ textAlign: "center" }}>{"Vendor Portal"}</h2>
        <Divider />
        <List>
          {["Products", "Orders", "Sales"].map((text) => (
            <ListItem button key={text}>
              <Accordion>
                <AccordionSummary
                style={{width:"210px"}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {text}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography><Link to={`${match.url}/VendorForm`} style={{textDecoration:"none",color:"black"}}>Add {text}</Link></Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography><Link to={`${match.url}/listOfAdmins`}  style={{textDecoration:"none",color:"black"}}>List of {text}</Link></Typography>
                </AccordionDetails>
              </Accordion>
            
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>

        {/* Buttons */}
        <div
          style={{
            marginTop:"50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}

          <Button
            variant="contained"
            // color="primary"
            color="white"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
        
      </main>
      <div>
      <Switch>
        <Route path={`${match.path}/VendorForm`} component={VendorRegForm} />  
        {/* <Route path={`${match.path}/addAdmin`} component={AddAdmin} /> */}
        <Route path={`${match.path}/listOfAdmins`} component={ListOfAdmins} />
          
      </Switch>
      </div>

    </div>
  );
}
