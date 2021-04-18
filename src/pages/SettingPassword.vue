<template>
	<el-container>
		<div class="block-profile pt-5 pb-5">
			<div class="container">
				<div class="row">
					<el-navbar />
					<div class="col-md-9 col-xs-12 body-cart body-cart-profil">
						<div class="card">
							<div class="card-body">
								<h1 class="text-center mt-5">{{ $t("setting_password_title") }}</h1>
								<form class="w-100" @submit.prevent="updateProfile">

								<div class="form-row">
									<div class="form-group col-md-6">
										<label for="inputPassword">{{ $t("setting_password_password") }}</label>
										<input
											type="password"
											class="form-control"
											v-model="$v.user.password.$model"
											:class="{ 'is-invalid': $v.user.password.$error }"
										/>
										<div class="invalid-feedback">
											<span class="text-danger" v-if="!$v.user.password.required">
												{{ $t("setting_password_required") }}
											</span>
											<span class="text-danger" v-if="!$v.user.password.minLength">
											{{ $t("setting_password_password_error") }}
											</span>
										</div>
									</div>

									<div class="form-group col-md-6">
										<label for="inputConfirmePassword">
											{{$t("setting_password_confirme")}}
										</label>
										<input
											type="password"
											class="form-control"
											v-model="$v.user.confirmePassword.$model"
											:class="{ 'is-invalid': $v.user.confirmePassword.$error }"
										/>
										<div class="invalid-feedback">
											<span class="text-danger" v-if="!$v.user.confirmePassword.sameAs">
											{{ $t("setting_password_confirmation_password_error") }}
											</span>
										</div>
									</div>
								</div>

									<div class="d-flex justify-content-center">
										<button
											type="submit"
											class="btn btn-primary pr-5 pl-5"
											:disabled="this.$v.$invalid"
										>
											{{ $t("setting_password_submit") }}
										</button>
									</div>

								</form>
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
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
	name: "SettingPassword",
	data() {
		return {
			user: {
				password: "",
				confirmePassword: ""
			}
		}
	},
	validations: {
		user: {
			password: {
				required,
				minLength: minLength(8)
			},
			confirmePassword: {
				same: sameAs("password")
			},
		}
	},
	methods: {
		updateProfile() {
			this.$v.$touch();
			if (this.$v.$invalid) return;
			console.log(this.user);
			this.$toast.success(this.$t('register_success'))
		}
	},
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
