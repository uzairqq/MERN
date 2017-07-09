const contentNode=document.getElementById('contents');





class IssueTable extends React.Component {
 render() {
 const borderedStyle = {border: "1px solid silver", padding: 6};
 return (
 <table style={{borderCollapse: "collapse"}}>
 <thead>
 <tr>
 <th style={borderedStyle}>Id</th>
 <th style={borderedStyle}>Title</th>
 </tr>
 </thead>
 <tbody>
 <IssueRow issue_id={1}
 issue_name="Error in console when clicking Add" />
 <IssueRow issue_id={2}
 issue_name="Missing bottom border on panel" />
  <IssueRow issue_id={3}
 issue_name="competitor services are not working " />
 </tbody>
 </table>
 )
 }
}
class IssueRow extends React.Component
{
    render()
    {
        const borderedStyle={border:"1px solid silver",padding:4};
        return(
            <tr>
            <td style={borderedStyle}>{this.props.issue_id}</td>
            <td style={borderedStyle}>{this.props.issue_name}</td>
            </tr>
            
        )
    }
}


ReactDOM.render(<IssueTable/>,contentNode);