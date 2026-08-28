function createBankAccount(username, password, initialBalance) {
    const User = username;
    let Password = password;
    let Balance = initialBalance;

    function login(password) {
        if (Password === password) {
            return "Bạn đăng nhập thành công";
        } else {
            return "Sai mật khẩu";
        }
    }

    function deposit(amount) {
        if (amount > 5000000) {
            return "Số tiền nạp quá lớn!";
        } else {
            Balance += amount;
            return Balance;
        }
    }

    function withdraw(amount) {
        if (amount > Balance) {
            return "Số dư tài khoản không đủ!";
        } else {
            Balance -= amount;
            return Balance;
        }
    }

    function getBalance() {
        return Balance;
    }

    function changePassword(oldPassword, newPassword) {
        if (oldPassword !== Password) {
            return "Mật khẩu cũ chưa đúng";
        }

        Password = newPassword;
        return "Bạn đổi mật khẩu thành công";
    }

    function getInfo() {
        return `Username: ${User}\nBalance: ${Balance}`;
    }

    return {
        getBalance,
        login,
        withdraw,
        changePassword,
        getInfo,
        deposit
    };
}

const account = createBankAccount(
    "Phat",
    "123456",
    1000000
);

console.log(account.login("123456"));

console.log(account.login("111111"));

console.log(account.getBalance());

console.log(account.deposit(500000));

console.log(account.withdraw(300000));

console.log(account.withdraw(2000000));

console.log(account.changePassword("123456", "888888"));

console.log(account.login("123456"));

console.log(account.login("888888"));

console.log(account.getInfo());