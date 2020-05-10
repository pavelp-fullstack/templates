import React from 'react';
import ReactDom from 'react-dom';
import './app.scss';
import * as path from 'path';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { count: 1 };
  }

  versions(): any[] {
    const items: any[] = [];
    const vers: any = process.versions as any;
    Object.getOwnPropertyNames(process.versions).forEach((pn) => {
      items.push(
        <tr key={pn}>
          <td className="prop">{pn}</td>
          <td>{vers[pn]}</td>
        </tr>
      );
    });
    return items;
  }

  count () {
    return <h1>
      {(this.state as any).count}
    </h1>
  }

  render() {
    return (
      <div className="container">
        <h2>about ():</h2>
        <table className="table table-striped table-bordered table-sm">
          <thead className="thead-dark">
            <tr>
              <th>prop</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>{this.versions()}</tbody>
        </table>
        {this.count()}
      </div>
    );
  }
}

ReactDom.render(<App />, mainElement);
