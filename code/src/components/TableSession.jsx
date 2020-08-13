import React from 'react';
import { withStyles } from '@material-ui/styles';
import Comment from './Comment.jsx';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PersonOutline from '@material-ui/icons/PersonOutline';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Star from '@material-ui/icons/Star';
import EventNote from '@material-ui/icons/EventNote';
import Timer from '@material-ui/icons/Timer';
import DynamicFeed from '@material-ui/icons/DynamicFeed';

const useStyles = makeStyles({
  table: {
    margin:"12px 0px 0px -12px",
	width:"103%",
	
  },
  tableCellHeadrRow:{
	  backgroundColor:"#BFD7F2",
	  color:"#507299",
  }, 
  tableCellHeadContent:{
	  border:"2px solid #F3F3F3",
	   color:"#507299",
	   fontWeight:"bold",
	   textAlign:"center",
	   paddingBottom:"0px",
	   paddingTop:"0px",
	   fontSize:"9pt",
  },
  tableCellContent:{
	  border:"2px solid #F3F3F3",
	  padding: "5px",
	  paddingLeft:"5px",
  }
});
export function DateDuration(props){
	return(
		<><p><EventNote />{props.date}</p>
		<p><Timer />{props.duration}</p></>
	);
};


export default function TableSession(props){
	const classes = useStyles();
	return (
		<TableContainer className={classes.table}>
			<Table  aria-label="simple table">
				<TableHead>
					<TableRow className={classes.tableCellHeadrRow}>
						<TableCell style={{ width: "1%" }} className={classes.tableCellHeadContent}></TableCell>
						<TableCell className={classes.tableCellHeadContent}><PersonOutline /></TableCell>
						<TableCell style={{ width: "30%" }} className={classes.tableCellHeadContent}>Запросы ДО</TableCell>
						<TableCell style={{ width: "30%" }} className={classes.tableCellHeadContent}>Подсказки</TableCell>
						<TableCell  style={{ width: "1%" }}  className={classes.tableCellHeadContent}>Док-ты</TableCell>
						<TableCell  style={{ width: "1%" }}  className={classes.tableCellHeadContent}>Дата/продолжител.</TableCell>
						<TableCell style={{ width: "20%" }} className={classes.tableCellHeadContent}>Комментарии</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.dataRows.map((row) => (
					<TableRow style={{backgroundColor: row.index == props.infoActiveIndex ? "#F0F0F0": "white"}} key={row.index} value="3" onClick = {(e) => props.displayInfo(row.index, e)}>
						<TableCell align="center" className={classes.tableCellContent}><VisibilityOff /><Star style={{color:"#C9C91A"}} /></TableCell>
						<TableCell align="center" className={classes.tableCellContent}>{row.userId}</TableCell>
						<TableCell className={classes.tableCellContent}>{row.query}</TableCell>
						<TableCell className={classes.tableCellContent}><ul>{row.tips.map((tip) => <li>{tip}</li>)}</ul></TableCell>
						<TableCell align="center" className={classes.tableCellContent}>{row.documents} </TableCell>
						<TableCell align="center" className={classes.tableCellContent}><DateDuration date={row.date} duration={row.duration} /></TableCell>
						<TableCell className={classes.tableCellContent}><Comment index ={row.index} content={row.comments} typeComment="text" onSaveComment={props.saveComment}/></TableCell>
					</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}


