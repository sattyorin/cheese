import { useState } from 'react';
import { UserData } from '../models/Interfaces';

export type { Sento, Coupon } from '../models/Interfaces';

function Users() {
  const [users, setUsers] = useState<UserData[] | null>();
  return (
    <div>hello</div>
  )
};

export default Users
