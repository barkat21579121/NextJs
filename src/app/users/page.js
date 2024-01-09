import Link from 'next/link';
import getUserList from '../../../services/user'

export default async function UserDetails() {
    const user = getUserList();  /// called from services page 
    const userDetail = await user
    const userDetails = userDetail.products


    return (
        <div>

            {userDetails?.map((item) => (
                <div key={item.id}>
                    <h4> <Link href={`/users/${item.id}`}> {item.title}</Link></h4>
                </div>
            ))}

        </div>
    )
}

