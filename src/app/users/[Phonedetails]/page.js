import React from 'react'
import getUserList from '../../../../services/user'

export default async function PhoneDetails(props) {
    const userList = await getUserList();
    const usersList = userList.products;
    const userID = props.params.Phonedetails;
    const userDetail = usersList[userID - 1]
    console.log(userDetail)
    return (
        <div>


            <h4>
                {
                    userDetail.title
                }
            </h4>
            <h5>
                {
                    userDetail.description
                }
            </h5>



        </div>
    )
}
