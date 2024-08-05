const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop d34', price: 18000},
    {name: 'apple smart watch', price: 80},
    {name: 'boshundhara binding paper', price: 10000},
    {name: 'lg smart phone', price: 12000},
    {name: 'old granny land phone', price: 100},
    
    ]
    
    function searchProducts(products, searchText){
         
        for(const product of products){
            const name = product.name;
            if (name.indexOf(searchText) != -1){
                console.log(name)
    
            }
        }
    }
    const matched = searchProducts(products, 'phone');
    =======
    const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop d34', price: 18000},
    {name: 'apple smart watch', price: 80},
    {name: 'boshundhara binding paper', price: 10000},
    {name: 'lg smart phone', price: 12000},
    {name: 'old granny land phone', price: 100},
    
    ]
    
    function searchProducts(products, searchText){
        for(const product of products){
            console.log(product.name);
        }
    }
    const matched = searchProducts(products, 'phone');
    >>>>>>> faf01f9c263a8d0c1dfca3d8f819f696d99e28f5
    console.log(matched);