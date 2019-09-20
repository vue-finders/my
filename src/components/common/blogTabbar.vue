<template>
    <div class="blogTabbar_box">
        <div class="img-left">
            <ul>
                <li>
                    <a href="#">
                        <img src="../../assets/4.jpg" alt="">
                        <span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../assets/2.jpg" alt="">
                        <span>个人博客，属于我的小世界！</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="title-right">
            <ul @mouseout="outStyle">
                <li v-for="(item,index) in list" :key="item.title" @mouseover="selectStyle(index)" :class="{'active':count==index}">
                    <i :class="{'active2':count==index}">{{index+1}}</i>
                    <a href="#" :class="{'active3':count==index}">{{item.title}}</a>
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count: 0,
            list:[
                {
                    title:'安静地做一个爱设计的女子',
                    content:'自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片'
                },
                {
                    title:'电话以外的宁静',
                    content:'电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活'
                },
                {
                     title:'遇见一个未知的你',
                    content:'电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活'
                },
                {
                    title:'个人网站做好了，百度不收录怎么办？来，看看他们怎么做的',
                    content:'不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了'
                },
                {
                    title:'个人博客，属于我的小世界！',
                    content:'个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。'
                }
            ]
        }
    },
    mounted(){
        this.selectStyle(0)
    },
    methods:{
        selectStyle(index){
            this.count = index;
            // console.log(this.count)
        },
        outStyle(){
            this.selectStyle(0)
        },
    }
}
</script>

<style lang="less" scoped>
.blogTabbar_box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    .img-left{
        width: 32%;
        height: 218px;
        li{
            height: 100px;
            margin-bottom: 10px;
            border-radius: 3px;
            overflow: hidden;
            position: relative;
            background: #000000;
            a{
                display: block;
                height: 100%;
            }
            img{
                width: 100%;
                height: 100%;
                opacity: .7;
                transition: all 0.5s ease;
            }
            & :hover > img{
                opacity: 1;
                transform: scale(1.2)
            }
            span{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 30%;
                font-size: 15px;
                padding: 0 40px;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;
            }
        }
    }
    .title-right{
        width: 66%;
        li{
            line-height: 32px;
            height: 22px;
            overflow: hidden;
            padding: 0 20px 10px 20px;
            i{
                width: 20px;
                height: 20px;
                display: block;
                float: left;
                background: #9a9a9a;
                color: #fff;
                line-height: 20px;
                text-align: center;
                font-style: normal;
                margin-right: 20px;
                position: relative;
                top: 6px;
            }
            a{
                color: #333;
                // font-weight: bold;
                font-size: 14px;
                text-decoration: none;
            }
            p{
                height: 48px;
                line-height: 24px;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                // white-space: nowrap;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;

            }
        }
    }
    .active{
        height: 100%!important;
        background: #f7f7f7;
    }
    .active2{
        background: #000000!important;
    }
    .active3{
        color: #000000!important;
        font-weight: bold;
    }
}
</style>