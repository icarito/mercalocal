<template>
    <div>
    <h1>MercaLocal</h1>
    <h2>Productos</h2>
    <vue-spreadsheet-lite @update="update_product" :data="data" :header="product_header()"/>
    <pre>{{ productos }}</pre>
    <h2>Proveedores</h2>
    <pre>{{ proveedores }}</pre>
    <h2>Ordenes</h2>
    <pre>{{ ordenes }}</pre>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.productos = {}
        self.proveedores = {}
        self.ordenes = {}
        self.data = [['',''] for item in range(10)]

    def CREATED(self):
        self['$gun'].get('productos').map().on(
            lambda node, key: self.add_product(key, node))
        self['$gun'].get('proveedores').map().on(
            lambda node, key: self.add_provider(key, node))
        self['$gun'].get('ordenes').map().on(
            lambda node, key: self.add_order(key, node))
        window.model = self

    def add_product(self, key, node):
        if node:
            Vue.set(self.data, int(key), [node.name, node.price])
        Vue.set(self.productos, key, node)

    def update_product(self, productos):
        prods = {}
        for key in range(len(productos)):
            item = productos[key]
            if item:
                prods[key] = {'name': item[0],
                              'price': item[1]}
        if prods:
            self['$gun'].get('productos').put(prods)

    def add_provider(self, key, node):
        Vue.set(self.proveedores, key, node)

    def add_order(self, key, node):
        Vue.set(self.proveedores, key, node)

    def product_header(self):
        return [
            { 'name': 'Producto', 'width': 400 },
            { 'name': 'Precio', 'width': 100 }
        ]

</script>

<style scoped>

</style>
