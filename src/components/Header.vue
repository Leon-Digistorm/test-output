<template>
    <div>
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="min-w-0 flex-1">
                <h2 class="text-2xl/7 font-semibold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Todo list</h2>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row mt-6 gap-8">
            <div>
                <p class="text-sm mb-1 font-medium">Instructions:</p>
                <ul class="text-sm list-disc pl-4 text-gray-700">
                    <li>You have 2 hours to do as much as you can</li>
                    <li>Complete the test by replying to the email with your git repo url</li>
                    <li>Utilisation of Pinia, Vuex or any other vue based state management</li>
                    <li>The main tasks for this test are listed under "My tasks"</li>
                </ul>
            </div>

            <div class="max-w-xl">
                <p class="text-sm mb-1 font-medium">Notes:</p>
                <ul class="text-sm list-disc pl-4 text-gray-700">
                    <li>Add, remove or change components as you see fit</li>
                    <li>Modifying any part the UI is welcomed but not necessary</li>
                    <li>No backend required</li>
                    <li>We will be assessing the understanding of the requirements/readability of the code, quality of the comments and working solution</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>