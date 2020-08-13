import React from 'react';
import { withStyles } from '@material-ui/styles';
import styled, { css } from 'styled-components'
import Search from '@material-ui/icons/Search';
import PersonOutline from '@material-ui/icons/PersonOutline';
import {TextInput, ButtonIcon, ButtonSearch, InputCount} from '../style';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Box from '@material-ui/core/Box';
import FileCopy from '@material-ui/icons/FileCopy';
const styles = theme => ({
  buttons:{
	height:"30px",
	width:"25px",
	backgroundColor:"#507299",
	border: "none",
	marginRight:'20px',
  },
  buttonsCloseSession :{
	  backgroundColor:"#507299"
  }, 
 
});


class SearchPlugin extends React.Component{
	constructor(props){
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.onSearchButton = this.onSearchButton.bind(this);
		this.state = {searchDoc: false, searchMark:false, inputSearchByTag: "", inputSearchById: ""};
		this.onResetSearch = this.onResetSearch.bind(this);
	}
	onSearch(e){
		var text = e.target.value.trim();  
		if(e.target.className.search("searchByTipsAndComments") >=0)
			this.setState({inputSearchByTag: text});
		if(e.target.className.search("searchById") >=0)
			this.setState({inputSearchById: text})
		this.props.onSearch(text, e);
    }
	onSearchButton(e){
		if(e.target.className.search("searchWithDocs") >=0)
			this.setState({searchDoc:!this.state.searchDoc});
		else if(e.target.className.search("searchWithQuery")>=0)
			this.setState({searchQuery:!this.state.searchQuery});
		this.props.onSearch(this.state.inputSearchById + '+' + this.state.inputSearchByTag, e);
	}
	onResetSearch(e){
		this.setState({searchDoc: false, searchMark:false, searchQuery:false,inputSearchByTag:"", inputSearchById:""});
		this.props.onResetSearch(e);
	}

	render(){
		const { classes } = this.props;
		return(
		<>
			 <div style={{ width: '100%' }}>
				<Box display="flex" p={1} >
					<Box p={1} flexGrow={1} width="90%"  >
						<div>
							<TextInput value={this.state.inputSearchByTag} className={"searchByTipsAndComments"}  width={"230px"} placeholder = 'Текст темы, подсказки или комментария' onChange={this.onSearch} />
							<TextInput value={this.state.inputSearchById} className={"searchById"} width={"193px"} placeholder= 'ID пользователя' onChange={(e) => this.onSearch(e)} />
							<ButtonSearch className={"searchWithMark"} >Неразмеченные</ButtonSearch>
							<ButtonSearch colorActive={this.state.searchDoc? "#C9C91A" : "white"} className={"searchWithDocs"} onClick={this.onSearchButton}>С документами</ButtonSearch>
							<ButtonSearch colorActive={this.state.searchQuery? "#C9C91A" : "white"}  className={"searchWithQuery"} onClick={this.onSearchButton}>С запросами ДО</ButtonSearch>
							<ButtonIcon className={classes.buttons} onClick ={(e) =>this.onResetSearch(e)} variant="contained" color="primary">X</ButtonIcon> 
						</div>
					</Box>
					<Box>
						<Box display="flex" flexDirection="row"  height="50px">
							<Box p={1} style={{paddingTop:"15px", paddingLeft:"15px", color:"#507299"}}>
							  <HelpOutline fontSize="small" />
							</Box>
							<Box p={1} >
								<InputCount placeholder="Кол-во" />
							</Box>
							<Box p={1} style={{paddingTop:"13px", color:"#47BF87"}} >
							  <FileCopy fontSize="small" />
							</Box>
						</Box>
					</Box>
				</Box>
			</div>
			
		</>
		);
	}
}
export default withStyles(styles)(SearchPlugin);