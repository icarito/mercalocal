<template>
    <div>
    <h1>{{ origin }}</h1>
    <p>{{ msg }}</p>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.origin = 'Eco db'
        self.msg = "loading..."

    def MOUNTED(self):
        console.log(self.origin)


</script>
