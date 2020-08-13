import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchPlagin from './SearchPlugin.jsx';
import InfoSession from './InfoSession.jsx';
import TableSession from './TableSession.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

  
import {Title, HeaderSite, HeaderTable, ButtonCloseSessionInfo} from '../style';


const styles = theme => ({
  main:{
	  overflow:"hidden",
	  height:"100vh",
	   backgroundColor:'#E8E8E8',
  },
  container: {
    backgroundColor:'#E8E8E8',
  },
  searchPlagin: {
	  marginTop:"-30px",
	  marginBottom:"-15px",
  },
  infoSession:{
	  backgroundColor:"white",
	  marginRight:"35px",
  },
  tableSession: {
	marginLeft:"30px",
	marginRight:"15px",
	backgroundColor:"white",
	height:"87vh",
	 overflowY:"auto",
	 overflowX: "hidden",
  },
  
});



class AppIndex extends React.Component{
	constructor(props){
		super(props);
		this.state = {dataRows : this.props.dataRows, infoActiveIndex: -1, activeSessionBlock:true, activeButtonSearchByDoc:false,activeButtonSearchByQuery: false};
		this.displayInfo = this.displayInfo.bind(this);
		this.saveComment = this.saveComment.bind(this);
		this.closeSessionBlock = this.closeSessionBlock.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onResetSearch = this.onResetSearch.bind(this);
		
	}
	
	displayInfo(id, e){
		if(e.target.className !="comment")
			this.setState({infoActiveIndex: id, activeSessionBlock: true});
			
	}
	
	saveComment(content,index){
		this.props.dataRows[index].comments = content;
		this.setState({dataRows : this.props.dataRows});	
	}
	
	closeSessionBlock(e){
		this.setState({activeSessionBlock: false});
		this.setState({infoActiveIndex : -1});
	}
	
	searchByTipAndComment(item, text){
		return item.comments.toLowerCase().search(text.toLowerCase())!== -1 || item.tips.map((tip) => tip.toLowerCase()).join(' ').search(text.toLowerCase()) !== -1;	
	};
	searchById(item, text){
		return item.userId.toString().search(text)!== -1;
	};
	searchByButtons(item, buttonByDoc, buttonByQuery){
		let ans1 = item.documents > 0;
		let ans2 = item.query.length > 0;
		return buttonByDoc && buttonByQuery && ans1 && ans2 || buttonByDoc && !buttonByQuery && ans1 || !buttonByDoc && buttonByQuery && ans2 || !buttonByDoc && !buttonByQuery && true
	}
	onSearch(text, e){
		var filteredList = {}
		if(e.target.className.search("searchByTipsAndComments") >=0){
			filteredList = this.props.dataRows.filter(item => this.searchByTipAndComment(item, text) && this.searchByButtons(item, this.state.activeButtonSearchByDoc, this.state.activeButtonSearchByQuery));
		}
		else if(e.target.className.search("searchById")>=0){
			filteredList = this.props.dataRows.filter(item => this.searchById(item, text) && this.searchByButtons(item, this.state.activeButtonSearchByDoc, this.state.activeButtonSearchByQuery));
		}
		
		else{
			var inputByTag =  text.split('+')[1];
			var inputById =  text.split('+')[0];
			if(e.target.className.search("Docs") >=0)
			{
				if(!this.state.activeButtonSearchByDoc)
					filteredList = this.props.dataRows.filter(item => this.searchByTipAndComment(item,inputByTag)  && this.searchById(item, inputById) && this.searchByButtons(item, true, this.state.activeButtonSearchByQuery));
				else 
					filteredList = this.props.dataRows.filter(item => this.searchByTipAndComment(item,inputByTag)  && this.searchById(item, inputById) && this.searchByButtons(item, false, this.state.activeButtonSearchByQuery));
				this.setState({activeButtonSearchByDoc : !this.state.activeButtonSearchByDoc});
			}
			else if(e.target.className.search("Query")>=0)
			{
				if(!this.state.activeButtonSearchByQuery)
					filteredList = this.props.dataRows.filter(item => this.searchByTipAndComment(item,inputByTag)  && this.searchById(item, inputById) && this.searchByButtons(item, this.state.activeButtonSearchByDoc, true));
				else 
					filteredList = this.props.dataRows.filter(item => this.searchByTipAndComment(item,inputByTag)  && this.searchById(item, inputById) && this.searchByButtons(item, this.state.activeButtonSearchByDoc, false));
				this.setState({activeButtonSearchByQuery : !this.state.activeButtonSearchByQuery});
			}
			
		}
		
		this.setState({dataRows: filteredList})
	}
	onResetSearch(e){
		this.setState({dataRows: this.props.dataRows});
		this.setState({activeButtonSearchByQuery:false, activeButtonSearchByDoc:false});
	}

	render(){
		const { classes } = this.props;
		return (
			 <div className={classes.main}>
				<CssBaseline />
				<Grid container  spacing={3} className={classes.container}>
					<Grid item xs={12} >
						<HeaderSite><Title>Онлайн-чаты</Title></HeaderSite>
					</Grid>
					<Grid item xs={12} className={classes.searchPlagin}>
						<SearchPlagin activeSessionBlock={this.state.activeSessionBlock} onResetSearch={this.onResetSearch} onSearch={this.onSearch}/>
					</Grid>				
					<Grid item xs={this.state.activeSessionBlock? 7: 12} className={classes.tableSession} >
						<HeaderTable>Сессия</HeaderTable>
						<TableSession dataRows = {this.state.dataRows} displayInfo = {this.displayInfo} saveComment = {this.saveComment} infoActiveIndex = {this.state.infoActiveIndex} />
					</Grid>
					{this.state.activeSessionBlock ? <Grid item xs  className={classes.infoSession} ><HeaderTable>Детализация сессии <ButtonCloseSessionInfo onClick={this.closeSessionBlock}>X</ButtonCloseSessionInfo></HeaderTable>
					<InfoSession dataSession = { this.state.infoActiveIndex != -1? this.props.dataRows[this.state.infoActiveIndex]: null} onSaveComment={this.saveComment}/>
					</Grid>: "" }
				</Grid>
			</div>
		);
	}

}
export default withStyles(styles)(AppIndex);