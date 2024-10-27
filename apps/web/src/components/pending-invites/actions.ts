'use server'

import { revalidateTag } from 'next/cache'

import { acceptInvite } from '@/http/accept-invite'
import { declineInvite } from '@/http/decline-invite'

export async function acceptInviteAction(inviteId: string) {
  await acceptInvite(inviteId)

  revalidateTag('organizations')
}

export async function declineInviteAction(inviteId: string) {
  await declineInvite(inviteId)
}
