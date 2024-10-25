import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { MemberList } from './member-list'

export default async function Members() {
  const permissions = await ability()

  const canInvite = permissions?.can('get', 'Invite')
  const canGetUsers = permissions?.can('get', 'User')
  return (
    <div className="space-y-4">
      <h1 className="pb-2 text-2xl font-bold">Members</h1>

      <div className="space-y-4">
        {canInvite && <Invites />}
        {canGetUsers && <MemberList />}
      </div>
    </div>
  )
}
