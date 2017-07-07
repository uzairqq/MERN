const contentNode=document.getElementById('contents');

class IssueList extends React.Component
{
    render()
    {
        return(
            <div>this is the placeholder of issue list<br/>
                <span>uzair<br/></span>
                <span>iqbal<br/></span>
                <span>laraib</span>
            </div>
        )
    }
}
ReactDOM.render(<IssueList/>,contentNode);