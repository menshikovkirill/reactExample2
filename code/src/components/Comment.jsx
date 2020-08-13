import React from 'react';
import { withStyles } from '@material-ui/styles';
import Edit from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
const styles = theme => ({
  comment: {
    fontSize:"8pt",
  },
});

function DisplayText(props){
	return <Tooltip title="Двойной щелчок для редактирования"><div className={"comment"} onDoubleClick={props.onChangeType}><Edit />{props.content == "" ? "Введите комментарий" : props.content}</div></Tooltip>
}
function DisplayInput(props){
	return  <Tooltip title="Двойной щелчок для сохранения"><div><textarea className="comment" onDoubleClick={props.onSaveComment}>{props.content}</textarea></div></Tooltip>
}
class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state = {content : this.props.content, typeComment:this.props.typeComment};
		this.saveComment = this.saveComment.bind(this);
		this.changeType = this.changeType.bind(this);
	}
	saveComment(e){
		this.props.onSaveComment(e.target.value, this.props.index);
		this.setState({typeComment: "text"})
	}
	changeType(){
		if(this.state.typeComment == "text")
			this.setState({typeComment: "textarea"})
	}
	render(){
		const { classes } = this.props;
		return(
			<div className={classes.comment} >{this.state.typeComment == "text" ? <DisplayText  onChangeType={this.changeType} content={this.props.content}/> :<DisplayInput content={this.props.content} onSaveComment={this.saveComment} /> }</div>
			
		);
	}
}

export default withStyles(styles)(Comment);