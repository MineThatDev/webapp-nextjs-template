import { create } from 'zustand';
import { User, Credentials } from '@/models/user.model';

interface AuthStore {
    isAuthenticated: boolean
    user: User | null
    login: (credentials: Credentials) => Promise<void>
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    user: null,
    login: async (credentials) => {
        console.log("credentials: ", credentials);

        // authentication ...

        set({ 
            isAuthenticated: true, 
            user: { id: "1", name: "Poopan", email: "poopan@gmail.com", role: "user" } // set user information ...
        }) 

    },
    logout: () => {
        set({ isAuthenticated: false, user: null })
    }
}))