const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 18000 },
    { name: 'apple smart watch', price: 80 },
    { name: 'boshundhara binding paper', price: 10000 },
    { name: 'lg smart phone', price: 12000 },
    { name: 'old granny land phone', price: 100 },
    { name: 'samsung watch', price: 1000 },
];

function searchProducts(products, searchText) {
    const matched = []; // Define 'matched' inside the function
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) !== -1) {
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchProducts(products, 'watch');
console.log(matched);
