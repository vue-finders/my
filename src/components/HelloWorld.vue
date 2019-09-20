<template>
  <div class="hello">
    <blog-header></blog-header>
    <div class="content">
      	<div class="left-box">
			<div class="banner">
				<el-carousel trigger="click" height="260px" :autoplay="true">
					<el-carousel-item v-for="(item,index) in img" :key="index">
						<img :src="item.image" alt="">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="headline">
				<ul>
					<li>
						<a href="">
							<img src="../assets/5.jpg" alt="">
							<span>为什么说10月24日是程序员的节日？</span>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../assets/6.jpg" alt="">
							<span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="left-tabbar">
				<el-row>
					<el-col :span="24">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="个人博客" name="first">
								<blog-tabbar></blog-tabbar>
							</el-tab-pane>
							<el-tab-pane label="CSS3|Html5" name="second">
								<blog-tabbar></blog-tabbar>
							</el-tab-pane>
							<el-tab-pane label="网站建设" name="third">
								<blog-tabbar></blog-tabbar>
							</el-tab-pane>
							<el-tab-pane label="推荐工具" name="fourth">
								<blog-tabbar></blog-tabbar>
							</el-tab-pane>
							<el-tab-pane label="设计心得" name="fifth">
								<blog-tabbar></blog-tabbar>
							</el-tab-pane>
						</el-tabs>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="right-box">
			<div class="card">
				<h2>我的名片</h2>
				<p>网名：DanceSmild|即步非烟</p>
				<p>职业：Web前端设计师、网页设计</p>
				<p>现居：安徽省-合肥市</p>
				<p>Email：dancesmiling@qq.com</p>
				<ul>
					<li>
						<span class="iconfont iconfangzi"></span>
					</li>
					<li>
						<span class="iconfont iconyouxiang"></span>
					</li>
					<li>
						<span class="iconfont iconqq"></span>
					</li>
					<li>
						<span class="iconfont iconweixin"></span>
					</li>
				</ul>
			</div>
			<div class="notice">
				<h2>最近更新</h2>
				<ul>
					<li><a href="#">【个人博客空间申请】金牛云服，免费领空间啦</a></li>
					<li><a href="#">双十一，阿里云特惠活动，快来领券啦</a></li>
					<li><a href="#">第二届 优秀个人博客模板比赛参选活动</a></li>
					<li><a href="#">为什么说10月24日是程序员的节日？</a></li>
				</ul>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
		activeName: 'first',
	  	msg: 'Welcome to Your Vue.js App',
	  	img:[
				{
					image: require('../assets/1.jpg')
				},
				{
					image: require('../assets/2.jpg')
				},
				{
					image:require('../assets/3.jpg')
				},
				{
					image:require('../assets/4.jpg')
				}
	  		]
    	}
	  },
	  methods:{
		 	handleClick(tab, event) {
				console.log(tab, event);
			}
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.content{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.left-box{
			width: 75%;
			margin-top: 25px;
			.banner{
				width: 68.5%;
				border-radius: 5px;
				overflow: hidden;
				float: left;
				margin-bottom: 20px;
				img{
					width: 100%;
					height: 260px;
				}
			}
			.headline{
				float: right;
				width: 30%;
				height: 260px;
				ul{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 100%;
					li{
						a{
							height: 100%;
							display: block;
							position: relative;
						}
						border-radius: 3px;
						overflow: hidden;
						width: 100%;
						height: 125px;
						background: #000;
						img{
							width: 100%;
							height: 100%;
							opacity: 0.7;
							transition:all 0.5s ease;
						}
						& :hover > img{
							opacity: 1;
							transform: scale(1.2);
						}
						span{
							position: absolute;
							color: #fff;
							top: 30%;
							// display: block;
							bottom: 0;
							left: 0;
							right: 0;
							text-align: center;
							font-size: 15px;
							height: 48px;
							line-height: 24px;
							padding: 0 40px;
							overflow: hidden;
							text-overflow: ellipsis;
							-webkit-box-orient: vertical;
							display: -webkit-box;
							-webkit-line-clamp: 2;
						}
					}
				}
				
			}
			.left-tabbar{
				float: left;
				background: #fff;
				padding: 20px;
				border-radius: 3px;
			}
		}
		.right-box{
			width: 23.5%;
			margin-top: 25px;
			.card{
				height: 260px;
				background: rgba(42, 42, 42, 1);
				border-radius: 5px;
				margin-bottom: 20px;
				h2{
					font-size: 24px;
					color: #89919a;
					padding: 10px;
				}
				p{
					font-size: 12px;
					color: #d0d2d4;
					padding-left: 20px;
					line-height: 28px;
				}
				ul{
					display: flex;
					justify-content: space-between;
					width: 80%;
					padding: 15px 0 0 20px;
					li{
						span{
							font-size: 34px;
							box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
							border-radius: 50%;
							width: 50px;
							height: 50px;
							display: block;
							text-align: center;
						}
						.iconfangzi{
							color: #ef5509
						}
						.iconyouxiang{
							color: #FF991A
						}
						.iconqq{
							color: #1296DB
						}
						.iconweixin{
							color: #07AF12
						}
					}
				}
			}
			.notice{
				background: #fff;
				padding: 20px;
				border-radius: 3px;
				height: 312px;
				box-sizing: border-box;
				h2{
					font-size: 16px;
					line-height: 38px;
					font-weight: normal;
					border-bottom: 2px solid #E4E7ED;
					margin-bottom: 10px;
					position: relative;
					&::after{
						content: "";
						width: 60px;
						height: 2px;
						background: #000;
						position: absolute;
						bottom: -2px;
						left: 0;
						transition: all .5s ease;
					}
					&:hover:after{
						width: 90px;
					}
				}
				ul{
					padding-top: 18px;
					li{
						font-size: 13px;
						line-height: 30px;
						background: #f6f6f6;
						margin-bottom: 12px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						padding: 4px 12px 4px 30px;
						border-radius: 4px;
						position: relative;
						&::before{
							content:"";
							width: 3px;
							height: 3px;
							background: #000;
							left: 15px;
							top: 18px;
							position: absolute;
							border-radius: 10px;
						}
						&:hover{
							box-shadow: 0 0 10px #ccc;
							background: #f2f2f2;
							transition: all .2s ease;
						}
						a{
							text-decoration: none;
							color: #333;
						}
					}
				}
			}
		}
	}
</style>
