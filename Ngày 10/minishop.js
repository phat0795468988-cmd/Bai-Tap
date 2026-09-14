function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Phát",
        balance: 230000000,
      });
    }, 2000);
  });
}

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Iphone 17 PRO MAX",
          price: 10000000,
        },
        {
          id: 2,
          name: "Iphone 15 PRO MAX",
          price: 30000000,
        },
        {
          id: 3,
          name: "Iphone 16 PRO MAX",
          price: 20000000,
        },
      ]);
    }, 4000);
  });
}

function buyProduct(user, product) {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if(user.balance >= product.price){
        user.balance -= product.price
        resolve("Thành Công")
    }
    else{
        reject("Thất bại số dư không đủ ")
    }
  },6000)
});
}

async function main() {
  try {
   

    console.log("MINI SHOP");

    console.log("Đang lấy thông tin khách hàng.........");
    const user = await getUser();
    console.log(` User: ${user.name}`);
    console.log(` User: ${user.balance} VNĐ`);

    console.log("Đang lấy danh sách sản phẩm.........");
    const products = await getProducts();
    products.forEach((product) => {
      console.log(`${product.id} - ${product.name} - ${product.price}`);
    });
    console.log("Đang lấy xử lý đơn hàng.........");
    const product = products[0];
    const result = await buyProduct(user, product);
    console.log(result);

    console.log(` Khách hàng: ${user.name}`)
    console.log(` Sản phẩm: ${product.name}`)
    console.log(` Giá: ${product.price}`)
    console.log(` Số dư còn lại: ${user.balance}`)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Kết thúc quá trình");
  }
}
main();
