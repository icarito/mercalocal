<template>
    <div>
    <div v-if="offline">
        <input v-model="username" placeholder="username" type="text"></input><br>
        <input v-model="password" @keydown.enter="authenticate" placeholder="password" type="password"></input><br>
        <button @click="register">Register</button>
        <button @click="authenticate">Login</button>
    </div>
    <div v-if="!offline">
        {{ username }}
    </div>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.user = {}
        self.username = ''
        self.password = ''
        self.offline = True

    def MOUNTED(self):
        window.auth = self
        self.user = self['$gun'].user()
        self['$gun'].on('auth', self.signIn)

    def authenticate(self):
        self.user.auth(self.username, self.password, self.result)

    def signIn(self):
        if self.user.get('is'):
            self.offline = False
        
    def result(self, res):
        console.log(res)

    def register(self):
        self.user.create(self.username, self.password, self.result)

</script>

<style scoped>

:scope {
    background-color: beige;
    position: fixed;
    right: 0px;
    top: 0px;
    padding: 5px;
}

</style>
