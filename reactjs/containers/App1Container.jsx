import React from "react"


export default class App1Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Hello world</h1>
            <h3>You are logged in as { user.name }</h3>
            {user.type === 'super' ? (
                <h3>content etc</h3>
            ) : (
                <h3>You do not have the correct permissions to view this content</h3>
            )}
            <style>{"table, th, td{border:1px solid black;}"}</style>
            <Table
                headers = {["colA", "colB"]}
                data = {[
                           ["R1C1", "R1C2"],
                           ["R2C1", "R2C2"]
                ]}
            />
          </div>
        </div>
      </div>
    )
  }
}

class Table extends React.Component {
    render() {
        var headings = [];
        for (var i=0; i < this.props.headers.length; i++) {
            headings.push(<td>{this.props.headers[i]}</td>);
        }
        var rows = [];
        for (var i=0; i < this.props.data.length; i++) {
            rows.push(<TableRow data={this.props.data[i]} />)
        }
        return(
            <table>
            <tbody>
                <tr>{headings}</tr>
                {rows}
            </tbody>
            </table>
        )
    }
}

class TableRow extends React.Component {
    render() {
        var cols = [];
        for (var i=0; i < this.props.data.length; i++) {
            cols.push(<td key={i}>{this.props.data[i]}</td>)
        }
        return(<tr>{cols}</tr>)
    }
}
