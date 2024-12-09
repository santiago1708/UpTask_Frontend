import api from '@/lib/axios'
import { isAxiosError } from 'axios'
import { ConfirmToken, UserRegistrationForm } from '@/types/index'


export async function createAccout(formData: UserRegistrationForm) {
    try {
        const url = "/auth/create-account"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
export async function confirmAccount(formData: ConfirmToken) {
    try {
        const url = "/auth/confirm-account"
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
