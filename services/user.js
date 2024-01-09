

export default async function getUserList() {

    const userList = (await fetch("https://dummyjson.com/products"));
    return userList.json()

}