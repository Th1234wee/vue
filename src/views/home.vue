<script setup>
    import Main   from  '@/components/main.vue';
    import Header from  '@/components/header.vue';
    import Footer from  '@/components/footer.vue';
    import Sidebar from  '@/components/sidebar.vue';
</script>
<template>
    <div>
        
        <div class="container">
            <div class="sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="main">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100vh;
        /* background-color: red; */
        margin: 0px 200px;
        display: flex;
    }
    .sidebar{
        width:30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }
    .main{
        width: 70%;
        height: 100%;
        background-color: green;
    }
</style>