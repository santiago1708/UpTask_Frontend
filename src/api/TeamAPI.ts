import { isAxiosError } from 'axios'
import api from '@/lib/axios'
import { Project, TeamMember, TeamMemberForm } from '../types'


export async function findUserByEmail({ projectId, formData }: { projectId: Project['_id'], formData: TeamMemberForm }) {
    try {
        const url = `http://localhost:4000/api/projects/${projectId}/team/find`
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
export async function addUserToProject({ projectId, id }: { projectId: Project['_id'], id: TeamMember['_id'] }) {
    try {
        const url = `http://localhost:4000/api/projects/${projectId}/team`
        const { data } = await api.post(url, { id })
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
