<template>
    <div class="blogHeader_box">
        <div class="line"></div>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item class="title">杨青青个人博客</el-menu-item>
            <el-menu-item index="1">网站首页</el-menu-item>
            <el-menu-item index="2">个人博客</el-menu-item>
            <el-submenu index="3">
                <template slot="title">网站制作</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="4">设计首页</el-menu-item>
            <el-menu-item index="5">关于我</el-menu-item>
            <el-menu-item index="6">时间轴</el-menu-item>
            <el-menu-item index="7"><a href="#" target="_blank">博客导航</a></el-menu-item>
            <el-menu-item index="8">留言</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex2: '1'
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
    .blogHeader_box{
        .line{
            background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
            height: 8px;
            width: 100%;
        }
        .title{
            font-size: 22px;
            font-weight: 800px;
        }
        .el-menu-demo{
            background: #000!important;
            .el-menu-item{
                background: #000!important;
            }
        }
        
    }
</style>