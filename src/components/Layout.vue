<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header -->
        <header class="bg-blue-600 text-white p-4">
            <h1 class="text-xl font-bold">My Vue + Tailwind App</h1>
        </header>

        <!-- Main content with sidebar -->
        <div class="flex flex-1">
            <!-- Sidebar -->
            <aside class="w-64 bg-gray-100 p-4">
                <nav>
                    <ul>
                        <li class="mb-2">
                            <a href=""> Dashboard </a>
                        </li>
                        <li class="mb-2">
                            <a href="">Profile</a>
                        </li>
                        <li class="mb-2">
                            <a href="">
                                Student List
                            </a>
                        </li>
                        <li class="mb-2">
                            <button @click="logout">LogOut</button>
                        </li>

                    </ul>
                </nav>
            </aside>

            <!-- Main -->

            <RouterView />

        </div>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white p-4 text-center">
            &copy; 2025 My Vue App. All rights reserved.
        </footer>
    </div>
</template>
<script setup>
    import { useRouter } from 'v';
    const logout = () => {
        sessionStorage.removeItem('so')
    }
</script>
