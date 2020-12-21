<template>
    <div class="container">
        <h2>Lista de usuarios</h2>
          <el-table :data="dataUsers" border style="width: 100%" class="my-5">
            <el-table-column label="Nombre" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.name}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Apellido" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.lastname}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Correo" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.email}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="ID" width="180">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{scope.row.id}}</el-tag>                       
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Accciones" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" class="mr-1" @click="handleDelete(scope.row.id)">Eliminar</el-button>
                    <el-button size="mini" type="info" class="mr-1" @click="handleEdit(scope.row.id)">Eliminar</el-button>
                </template>
            </el-table-column>         
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Listas',
    computed: {
        dataUsers(){
            return this.$store.getters.mostrarUsuarios;
        }
    },
    methods: {
        handleDelete(id) {
            this.$store.dispatch('eliminar', id);
        },
        handleEdit(id) {
            
        }
    }
}
</script>