const contentNode=document.getElementById('contents');


class IssueFilter extends React.Component
{
    render()
    {
        return(
            <div>This is a placeholder for the Issue Filter.</div>
        )
    }
}
class IssueAdd extends React.Component
{
    render()
    {
        return(
        <div>This is a placeholder for an Issue Add entry form.</div>
        )
    }
}
class IssueTable extends React.Component
{
    render(){
        return(
            <div>This is a placeholder for a table of Issues.</div>
        )
    }
}
class IssueList extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr/>
                <IssueAdd/>
                <hr/>
                <IssueTable/>
                <hr/>
            </div>
        )
    }
}
ReactDOM.render(<IssueList/>,contentNode);