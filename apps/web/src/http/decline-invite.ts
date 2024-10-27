import { api } from './api-client'

export async function declineInvite(inviteId: string) {
  await api.post(`invites/${inviteId}/reject`)
}
