import React from 'react';
import { withStyles } from '@material-ui/styles';
import styled from 'styled-components';
import {DefaultSession} from '../style';
import Comment from './Comment.jsx';
const styles = theme => ({
  infoSession:{
	  backgroundColor:'white',
	  width:"100%",
	  marginTop:"60px",
	  paddingLeft:"30px",
  }
  
});




class InfoSession extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { classes } = this.props;
		if(this.props.dataSession == null) return <DefaultSession><p>Выберете сессию для отображения детальной информации</p></DefaultSession>
		else {
		return(
			<div className={classes.infoSession}>
				<p>Index : {this.props.dataSession.index}</p>
				<p>Автор: {this.props.dataSession.userId}</p>
				<div>Подсказки: <ul>{this.props.dataSession.tips.map((tip) => <li>{tip}</li>)}</ul></div>
				<p>Количество документов: {this.props.dataSession.documents}</p>
				<p>Дата: {this.props.dataSession.date}</p>
				<p>Продолжительность: {this.props.dataSession.duration}</p>
				<p>Комментарии: <Comment index ={this.props.dataSession.index} content={this.props.dataSession.comments} typeComment="text" onSaveComment={this.props.onSaveComment}/></p>
			</div>
		);}
	}
}

export default withStyles(styles)(InfoSession);