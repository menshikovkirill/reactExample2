import styled from 'styled-components';

export  const Title = styled.h1`
	font-size:13pt;
	margin:0px;
	margin-left:10px;
`;

export const HeaderSite = styled.div`
	color: white;
	background-color:#507299;
	height:32px;
	line-height: 32px;
`;
export const HeaderTable = styled.div`
	background-color:#94A9C1;
	padding:5px;
	color:white;
	height:35px;
	text-align:center;
	line-height: 30px;
	font-size:13pt;
	margin:-12px;
`
export const ButtonCloseSessionInfo = styled.span`
	color:red;
	margin-left:10px;
`

export const TextInput = styled.input`
	height:${props => props.height || "30px"};
	padding: 0px 10px;
	width:${(props) => props.width};
	::placeholder {
       font-size:8pt;
   }
   margin-right:20px;
`

export const ButtonIcon = styled.button`
	height:30px;
	width:30px;
	background-color:#507299;
	border: none;
	margin-right:20px;
	color:white;
	
`
export const ButtonSearch = styled.button`
	  height:30px;
	  background-color:white;
	  border: none;
	  margin-right:20px;
	  font-size:8.5pt;
	  padding:0px 10px;
	  background-color: ${props => props.colorActive || "white"};
    }
`
export const DefaultSession = styled.div`
	color:#BFBFBF;
	margin:45px 25px;
	font-size:14pt;
	text-align:center;
	font-weight:bold;
`
export const InputCount = styled.input`
	width:50px;
	height:30px;
	::placeholder{
       font-size:8pt;
	}
	padding:5px;
`
