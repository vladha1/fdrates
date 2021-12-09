import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class TableComponent extends React.Component {
  removeProduct = product => {
    this.props.removeProduct(product);
  };

  render() {
    return (
      <Col md={{ span: 10, offset: 1 }}>
        <Table hover className="tableProducts">
          <thead>
            <tr>
              
              <th>Bank</th>
              <th>7D </th>
              <th>46D </th>
              <th>15D </th>
              <th>30D </th>
              <th>61D </th>
              <th>91D </th>
              <th>121D </th>
              <th>180D </th>
              <th>180d</th>
              <th>181D </th>
              <th>185D </th>
              <th>211D </th>
              <th>270d</th>
              <th>271D </th>
              <th>290D </th>
              <th>364d</th>
              <th>390D </th>
              <th>365D </th>
              <th>391D </th>

            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => {
              return (
                <tr key={product.id}>
                <td>{product.name}</td>  
                <td>{product.a7D}</td>
                <td>{product.a46D}</td>
                <td>{product.a15D}</td>
                <td>{product.a30D}</td>
                <td>{product.a61D}</td>
                <td>{product.a91D}</td>
                <td>{product.a121D}</td>
                <td>{product.a180D}</td>
                <td>{product.a180d}</td>
                <td>{product.a181D}</td>
                <td>{product.a185D}</td>
                <td>{product.a211D}</td>
                <td>{product.a270d}</td>
                <td>{product.a271D}</td>
                <td>{product.a290D}</td>
                <td>{product.a364d}</td>
                <td>{product.a390D}</td>
                <td>{product.a365D}</td>
                <td>{product.a391D}</td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { removeProduct }
)(TableComponent);
