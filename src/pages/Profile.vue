<template>
	<el-container>
		<div class="block-profile pt-5 pb-5">
			<div class="container">
				<div class="row">
					<el-navbar />
					<div class="col-md-9 col-xs-12 body-cart body-cart-profil">
						<div class="card">
							<div class="card-body">
								<img src="https://i.pravatar.cc/300" class="rounded mx-auto d-block user-avatar" alt="...">
								<h5 class="card-title text-center">user name</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. description</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</el-container>
</template>

<script>
import Container from '../components/container.vue';
import Navbar from '../components/navbar.vue';

export default {
	name: "Profile",
	components:{
		"el-container" : Container,
		"el-navbar": Navbar
	}
}
</script>

<style scoped>
	.block-profile {
		background: #dddddd7a;
		height: 100vh;
	}
	.body-cart-profil {
		height: 600px;
	}
	.card {
		width: 100%;
		height: 100%
	}
	.user-avatar {
		border-radius: 100% !important;
		height: 100px;
	}
	.card-text {
		text-align: justify;
	}
</style>
