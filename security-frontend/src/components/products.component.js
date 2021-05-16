import { connect } from "react-redux";
import React, { Component } from "react";
import {Link, Redirect} from 'react-router-dom';
import ProductService from "../services/product.service";


class Products extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: []
        };
      }
    
      componentDidMount() {
        ProductService.getProducts().then(
          response => {
            this.setState({
              products: response.data
            });
          },
          error => {
            this.setState({
              products:
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString()
            });
          }
        );
      }

    render() {
        const { user: currentUser, products } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>Products</strong>
                    </h3>
                </header>
                
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Size:</td>
                            <td>Price:</td>
                            
                        </tr>

                        {this.state.products &&
                        this.state.products.map((product, index) =>                       
                        //<Link to={`products/${product.id}`} className="nav-link">
                          <div className="styled" >
                          <tr>
                              <td>{product.name}</td>
                              <td>{product.size}</td>
                              <td>{product.price}</td>          
                              <td><button className="btn btn-info btn-sm">Details</button></td>                 
                          </tr>
                          </div>
                        //</Link>
                        )}
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    const { message } = state.message;
    //const { products } = state.products;
    return {
        user,
        message,
     //   products
    };
}


export default connect(mapStateToProps)(Products);


/*
{this.state.products.map((product, index) => {
  return(
    <tr>
      <td>{product.name}</td>
      <td>{product.size}</td>
      <td>{product.price}</td>                            
    </tr>
  );
})}
*/