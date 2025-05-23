import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)

    const isAuthenticated = computed(() => !!token.value)
    const userRole = computed(() => user.value?.role || null)

    function login(userData, authToken) {
        user.value = userData
        token.value = authToken
        localStorage.setItem('authToken', authToken)
    }

    function logout() {
        user.value = null
        token.value = null
        localStorage.removeItem('authToken')
    }

    function initialize() {
        const storedToken = localStorage.getItem('authToken')
        if (storedToken) {
            token.value = storedToken
        }
    }

    return { user, token, isAuthenticated, userRole, login, logout, initialize }
})