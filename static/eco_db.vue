<template>
    <div>
    <h1>MercaLocal</h1>
    <h2>Productos</h2>
    <p>{{ productos }}</p>
    <h2>Proveedores</h2>
    <p>{{ proveedores }}</p>
    <h2>Ordenes</h2>
    <p>{{ ordenes }}</p>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.productos = {}
        self.proveedores = {}
        self.ordenes = {}

    def MOUNTED(self):
        self['$gun'].get('productos').map().on(
            lambda node, key: self.add_product(key, node))
        self['$gun'].get('proveedores').map().on(
            lambda node, key: self.add_provider(key, node))
        self['$gun'].get('ordenes').map().on(
            lambda node, key: self.add_order(key, node))
        window.model = self

    def add_product(self, key, node):
        Vue.set(self.productos, key, node)

    def add_provider(self, key, node):
        Vue.set(self.proveedores, key, node)

    def add_order(self, key, node):
        Vue.set(self.proveedores, key, node)

</script>
