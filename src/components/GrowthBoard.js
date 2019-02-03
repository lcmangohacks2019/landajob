import React from 'react';
// import ReactDOM from 'react-dom';
// import { cpus } from 'os';

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.name;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
          </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}


const PRODUCTS = [
    { category: 'Java', price: '15', stocked: true, name: 'SpringBoot' },
    { category: 'Java', price: '1', stocked: true, name: 'Spring' },
    { category: 'Java', price: '5', stocked: false, name: 'Basketball' },
    { category: 'SaaS', price: '2', stocked: true, name: 'Amazon' },
    { category: 'SaaS', price: '4', stocked: false, name: 'Google' },
    { category: 'SaaS', price: '9', stocked: true, name: 'Microsoft' }
];

// ReactDOM.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById('container')
// );

class GrowthBoard extends React.Component {
    render() {
        return (
            <div class="container">
            <div class="d-flex justify-content-center">
                <row>
                    <colSpan>
                        <FilterableProductTable products={PRODUCTS} />
                    </colSpan>
                </row>

            </div>
            </div>
        )
    };
}

export default GrowthBoard;